import clsx from "clsx";
import React, { forwardRef, ReactNode } from "react";
import { Heading } from "@/components/ui";

interface SectionCardProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode,
  title: string
}

const SectionCard = forwardRef<HTMLElement, SectionCardProps>(
  ({ children, title, className, ...props }, ref) => {
      return (
        <section
          ref={ref}
          className={clsx(
            "pt-20 my-0 mx-auto max-w-5xl",
            className
          )}
          {...props}
          
        >
          <Heading size="lg">
            {title}
          </Heading>
          {children}
        </section>
      );
  }
);

export { SectionCard };