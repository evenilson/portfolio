import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
  className?: string
}

export function Heading({ size = 'md', children, asChild = false, className }: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'

  return (
    <Comp
      className={clsx(
        'font-bold',
        {
          'text-xl': size === 'sm',
          'text-2xl': size === 'md',
          'text-3xl': size === 'lg',
        },
        className
      )}
    >
      {children}
    </Comp>
  )
}
