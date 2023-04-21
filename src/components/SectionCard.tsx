import clsx from "clsx";
import { ReactNode } from "react";
import { Heading } from "./UI/Heading";

interface SectionCardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>{
  children: ReactNode,
  title: string
}

export function SectionCard({ children, title, className, ...props}: SectionCardProps){
  return (
    <section 
      className={clsx(
        "pt-20 my-0 mx-auto max-w-5xl",
        {className}
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