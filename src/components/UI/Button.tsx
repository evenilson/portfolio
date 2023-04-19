import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild = false, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={clsx(
        'py-1 px-4 bg-blue-400 border border-blue-800 text-blue-800 dark:border-blue-400 dark:text-blue-400 bg-opacity-[0.15] font-semibold rounded text-sm w-full transition-colors focus:ring-1 ring-black-400 dark:ring-white-400',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}