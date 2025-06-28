import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
}

export function Button({ children, asChild = false, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={clsx(
        'py-1 px-4 bg-orange-400 border border-orange-800 text-orange-800 dark:border-orange-400 dark:text-orange-400 bg-opacity-[0.15] hover:bg-opacity-25 font-semibold rounded text-sm w-full transition-opacity focus:ring-1 ring-black-400 dark:ring-white-400',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
