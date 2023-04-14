import * as TooltipRadix from '@radix-ui/react-tooltip';

interface TooltipProps {
  children: JSX.Element,
  tooltip: JSX.Element | string
}

export function Tooltip({ children, tooltip }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root
        delayDuration={100}
      >
        <TooltipRadix.Trigger asChild>
          {children}
        </TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipRadix.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade 
                    data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade 
                    data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade 
                    data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade 
                    select-none rounded-sm bg-white-400 text-black-800 px-2 py-2 
                    text-sm leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] 
                    will-change-[transform,opacity]"
            sideOffset={5}
          >
            {tooltip}
            <TooltipRadix.Arrow className="fill-white-400" />
          </TooltipRadix.Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}