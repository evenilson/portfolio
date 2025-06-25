import clsx from 'clsx';
import React, { forwardRef, ReactNode } from 'react';
import { Heading } from '@/components/ui';

interface SectionCardProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  title: string;
  isActive: boolean;
}

const SectionCard = forwardRef<HTMLElement, SectionCardProps>(
  ({ children, title, className, isActive = false, ...props }, ref) => {
    return (
      <section ref={ref} className={clsx('pt-20 my-0 mx-auto max-w-5xl', className)} {...props}>
        <Heading
          size="lg"
          className={clsx(
            'w-fit relative after:absolute after:h-[.2rem] after:left-0 after:-translate-x-0 after:-bottom-1 after:rounded-full after:bg-black-800 after:dark:bg-white-400 after:transition-width after:duration-700',
            'animated',
            {
              'after:w-3/4': isActive,
              'after:w-0': !isActive,
            },
          )}
        >
          {title}
        </Heading>
        {children}
      </section>
    );
  },
);

export { SectionCard };
