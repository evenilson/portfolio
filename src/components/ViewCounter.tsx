import { useCountUp, useTypeWriter, useViewCounter } from '@/hooks'
import { useI18n } from '@/i18n'

export function ViewCounter() {
  const { messages } = useI18n()
  const { views, loading } = useViewCounter()

  const { value } = useCountUp({
    from: 0,
    to: views ?? 0,
    duration: 2 * 1000, // 2 seconds
    decimalPlaces: 0,
    maxFps: 30,
  })

  const displayed = useTypeWriter({
    texts: ['...'],
    writeSpeed: 2 * 100, // 0.2 second
    eraseSpeed: 2 * 100, // 0.2 second
    loop: true,
    pauseBeforeDelete: 1 * 1000, // 1 second
  })

  if (loading) {
    return <span className="opacity-25 h-5 font-code select-none">{displayed}</span>
  }

  return (
    <span className="opacity-25 text-xs md:text-base font-code select-none">
      {messages.viewCounter.title}: #{value.toString().padStart(5, '0')}
    </span>
  )
}
