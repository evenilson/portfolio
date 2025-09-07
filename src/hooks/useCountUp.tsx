import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type Easing = (t: number) => number
const easeOutCubic: Easing = (t) => 1 - Math.pow(1 - t, 3)

export type UseCountUpOptions = {
  to: number
  from?: number
  duration?: number // ms
  easing?: Easing
  decimalPlaces?: number
  autoplay?: boolean
  respectReducedMotion?: boolean
  maxFps?: number
  onUpdate?: (value: number) => void
  onComplete?: () => void
}

const isFiniteNumber = (n: unknown): n is number => typeof n === 'number' && Number.isFinite(n)

export function useCountUp({
  to,
  from,
  duration = 800,
  easing = easeOutCubic,
  decimalPlaces = 0,
  autoplay = true,
  respectReducedMotion = true,
  maxFps,
  onUpdate,
  onComplete,
}: UseCountUpOptions) {
  // Safe initial values
  const initial = isFiniteNumber(from) ? from : 0
  const safeTo = isFiniteNumber(to) ? to : 0

  const [value, setValue] = useState<number>(initial)

  const rafId = useRef<number | null>(null)
  const startTimeRef = useRef<number>(0)
  const durationRef = useRef<number>(duration)
  const fromRef = useRef<number>(initial)
  const toRef = useRef<number>(safeTo)
  const runningRef = useRef(false)
  const lastDisplayedRef = useRef<number>(initial)
  const lastFrameTimeRef = useRef<number>(0)

  useEffect(() => {
    durationRef.current = duration
  }, [duration])

  const round = useMemo(() => {
    const factor = Math.pow(10, Math.max(0, decimalPlaces))
    return (n: number) =>
      Number.isFinite(n) ? Math.round(n * factor) / factor : lastDisplayedRef.current
  }, [decimalPlaces])

  const minFrameInterval = useMemo(() => (maxFps && maxFps > 0 ? 1000 / maxFps : 0), [maxFps])

  const stop = useCallback(() => {
    if (rafId.current != null) cancelAnimationFrame(rafId.current)
    rafId.current = null
    runningRef.current = false
  }, [])

  const tick = useCallback(
    (now: number) => {
      if (minFrameInterval > 0 && now - lastFrameTimeRef.current < minFrameInterval) {
        rafId.current = requestAnimationFrame(tick)
        return
      }
      lastFrameTimeRef.current = now

      const elapsed = now - startTimeRef.current
      const d = Math.max(0, durationRef.current)
      const t = d === 0 ? 1 : Math.min(1, elapsed / d)

      const eased = easing(t)
      const fromVal = fromRef.current
      const toVal = toRef.current

      // Guard against NaN pollution
      const baseFrom = isFiniteNumber(fromVal) ? fromVal : 0
      const baseTo = isFiniteNumber(toVal) ? toVal : 0

      const current = baseFrom + (baseTo - baseFrom) * eased
      const display = round(current)

      if (display !== lastDisplayedRef.current) {
        lastDisplayedRef.current = display
        setValue(display)
        onUpdate?.(display)
      }

      if (t < 1) {
        rafId.current = requestAnimationFrame(tick)
      } else {
        runningRef.current = false
        onComplete?.()
      }
    },
    [easing, minFrameInterval, onComplete, onUpdate, round]
  )

  const start = useCallback(
    (opts?: { from?: number; to?: number; duration?: number }) => {
      stop()

      const prevDisplay = isFiniteNumber(lastDisplayedRef.current)
        ? lastDisplayedRef.current
        : value

      fromRef.current = isFiniteNumber(opts?.from)
        ? opts!.from!
        : isFiniteNumber(from)
          ? from!
          : prevDisplay

      toRef.current = isFiniteNumber(opts?.to) ? opts!.to! : isFiniteNumber(to) ? to : 0

      if (isFiniteNumber(opts?.duration)) {
        durationRef.current = Math.max(0, opts!.duration!)
      } else {
        durationRef.current = Math.max(0, durationRef.current)
      }

      const prefersReduced =
        respectReducedMotion &&
        typeof window !== 'undefined' &&
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

      if (prefersReduced || durationRef.current <= 0) {
        const finalVal = round(toRef.current)
        lastDisplayedRef.current = finalVal
        setValue(finalVal)
        onUpdate?.(finalVal)
        onComplete?.()
        return
      }

      runningRef.current = true
      startTimeRef.current = performance.now()
      lastFrameTimeRef.current = 0
      rafId.current = requestAnimationFrame(tick)
    },
    [from, to, respectReducedMotion, round, stop, tick, value, onComplete, onUpdate]
  )

  const reset = useCallback(
    (next?: number) => {
      stop()
      const v = isFiniteNumber(next) ? next : initial
      lastDisplayedRef.current = v
      setValue(v)
      fromRef.current = v
      toRef.current = isFiniteNumber(to) ? to : 0
    },
    [initial, stop, to]
  )

  useEffect(() => {
    // Keep toRef synced; optionally autoplay
    toRef.current = isFiniteNumber(to) ? to : 0
    if (autoplay) start({ from: lastDisplayedRef.current, to })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to]) // only when `to` changes

  useEffect(() => stop, [stop])

  return {
    value,
    isRunning: runningRef.current,
    start,
    stop,
    reset,
  }
}
