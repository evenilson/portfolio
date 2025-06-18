import clsx from "clsx";
import { Envelope } from "phosphor-react";
import * as Separator from '@radix-ui/react-separator';
import { useScrollPosition } from "@/hooks";
import { SECTION_LIST } from "@/utils/constants";
import { Button, Text } from "@/components/ui";
import { ThemeSwitcher } from "@/components";

interface HeaderProps {
  activeSection: string;
}

export function Header({activeSection}:HeaderProps){
  
  const { scrollPosition } = useScrollPosition();

  return (
    <header className={clsx(
      'sticky top-0 z-10',
      {
        'dark:bg-black-600 dark:shadow-none shadow-sm bg-white-400': scrollPosition > 0,
      }
    )}>
      <nav className="w-full py-5 my-0 mx-auto flex items-center justify-between max-w-5xl" >
        <div className="flex items-center justify-between gap-6">
          {
            SECTION_LIST.map(({ id, name }) => {
              const isSelected = activeSection === id;
              return (
                <a key={id} href={`#${id}`} className={clsx(
                  'relative after:absolute hover:after:w-3/4 after:h-[.2rem] after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:rounded-full after:bg-blue-800 after:dark:bg-blue-400 after:transition-width after:duration-300',
                  'hover:text-blue-800 hover:dark:text-blue-400 animated',
                  {
                    'after:w-3/4 text-blue-800 dark:text-blue-400': isSelected,
                    'after:w-0': !isSelected
                  }
                )}
                >
                  <Text className={clsx('', {'': isSelected})}>
                    {name}
                  </Text>
                </a>
              )
            })
          }
        </div>
        <div className="flex items-center gap-4">
          <Button className="w-fit flex items-center gap-2" asChild>
            <a href="mailto:evenilsonlp@gmail.com" target="__blank">
              <Text className="uppercase items-center pt-1">
                entrar em contato
              </Text>
              <Envelope size={20}/>
            </a>
          </Button>
          <Separator.Root 
            className="bg-black-400 dark:bg-white-800 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-5 data-[orientation=vertical]:w-px"
            decorative
            orientation="vertical"
          />
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  )
}