import clsx from 'clsx'

import { useScrollReveal } from '@/hooks'

interface ScrollRevealProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  index: number
  once?: boolean
}

export function ScrollReveal({
  children,
  index = 0,
  once = true,
  className = '',
  ...rest
}: ScrollRevealProps) {
  const { isVisible, ref } = useScrollReveal(once)

  const prefersReduceMotion =
    typeof window !== undefined && window.matchMedia('(prefers-reduced-motion: reduce').matches

  const delayMs = prefersReduceMotion ? 0 : index * 100

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delayMs}ms`,
      }}
      className={clsx(
        'transition-all duration-700 ease-out transform',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        prefersReduceMotion && 'transition-none',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
