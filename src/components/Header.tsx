import * as Dialog from '@radix-ui/react-dialog'
import * as Separator from '@radix-ui/react-separator'
import clsx from 'clsx'
import { Envelope, List, X } from 'phosphor-react'
import { useState } from 'react'

import logoPortifolio from '@/assets/svgs/logo-portifolio.svg'
import { ThemeSwitcher } from '@/components'
import { Button, Text } from '@/components/ui'
import { useScrollPosition } from '@/hooks'
import { SECTION_LIST } from '@/utils/constants/general'

interface HeaderProps {
  activeSection: string
}

function NavDesktop({ activeSection }: HeaderProps) {
  return (
    <div className="hidden sm:flex items-center justify-between gap-6">
      {SECTION_LIST.map(({ id, name }) => {
        const isSelected = activeSection === id
        return (
          <a
            key={id}
            href={`#${id}`}
            className={clsx(
              'relative after:absolute hover:after:w-3/4 after:h-[.2rem] after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:rounded-full after:bg-blue-800 after:dark:bg-blue-400 after:transition-width after:duration-300',
              'hover:text-blue-800 hover:dark:text-blue-400',
              {
                'after:w-3/4 text-blue-800 dark:text-blue-400': isSelected,
                'after:w-0': !isSelected,
              }
            )}
          >
            <Text>{name}</Text>
          </a>
        )
      })}
    </div>
  )
}

function NavMobile({ activeSection }: HeaderProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="sm:hidden flex">
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger>
          <List size={24} />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 dark:bg-white-800/15 bg-black-800/15 backdrop-blur-sm z-40" />
          <Dialog.Content className="fixed top-0 left-0 z-50 h-full w-full max-w-80 shadow-lg bg-white-400 text-black-800 dark:text-white-400 dark:bg-black-800">
            <Dialog.Title className="flex items-center justify-between mb-6 p-2">
              <div className="flex gap-2 items-center">
                <img src={logoPortifolio} alt="Logo Portfólio" className="w-10 h-10" />
                <Text className="font-bold">Menu</Text>
              </div>
              <Dialog.Close>
                <button>
                  <X size={24} />
                </button>
              </Dialog.Close>
            </Dialog.Title>
            <nav className="flex flex-col items-center gap-8">
              {SECTION_LIST.map(({ id, name }) => {
                const isSelected = activeSection === id
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      'relative after:absolute hover:after:w-3/4 after:h-[.2rem] after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:rounded-full after:bg-blue-800 after:dark:bg-blue-400 after:transition-width after:duration-300',
                      'hover:text-blue-800 hover:dark:text-blue-400 w-fit',
                      {
                        'after:w-3/4 text-blue-800 dark:text-blue-400': isSelected,
                        'after:w-0': !isSelected,
                      }
                    )}
                  >
                    <Text>{name}</Text>
                  </a>
                )
              })}
            </nav>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export function Header({ activeSection }: HeaderProps) {
  const { scrollPosition } = useScrollPosition()

  return (
    <header
      className={clsx('sticky top-0 z-10 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-7', {
        'dark:bg-black-600 dark:shadow-none shadow-sm bg-white-400': scrollPosition > 0,
      })}
    >
      <nav className="w-full py-5 my-0 mx-auto flex items-center justify-between max-w-5xl">
        <div className="flex gap-2">
          <img src={logoPortifolio} alt="Logo Portfólio" className="w-10 h-10" />
          <NavMobile activeSection={activeSection} />
        </div>
        <NavDesktop activeSection={activeSection} />
        <div className="flex items-center gap-3">
          <Button className="w-fit flex items-center justify-center px-1 sm:px-4 gap-2" asChild>
            <a href="mailto:evenilsonlp@gmail.com" target="__blank" aria-label="Entrar em contato">
              <Text className="hidden sm:block uppercase items-center pt-1">entrar em contato</Text>
              <Envelope size={20} />
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
