import clsx from "clsx";
import { Envelope } from "phosphor-react";
import * as Separator from '@radix-ui/react-separator';
import { useEffect, useRef, useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Button } from "./UI/Button";
import { Text } from "./UI/Text";

interface HeaderProps {
  headerRef: React.RefObject<HTMLElement>,
  homeRef: React.RefObject<HTMLElement>,
  skillsRef: React.RefObject<HTMLElement>,
  projectsRef: React.RefObject<HTMLElement>,
  servicesRef: React.RefObject<HTMLElement>
}

export function Header({headerRef, homeRef, skillsRef, projectsRef, servicesRef}:HeaderProps){

  const { scrollPosition } = useScrollPosition()

  const [sections, setSections] = useState(
    [
      {
        id: 'home',
        name: 'Início',
        positionTop: homeRef.current?.offsetTop ?? 0,
        positionBottom: homeRef.current?.offsetTop ?? 0 + (homeRef.current?.offsetHeight ?? 4000),
      },
      {
        id: 'skills',
        name: 'Habilidades',
        positionTop: skillsRef.current?.offsetTop ?? 4001,
        positionBottom: skillsRef.current?.offsetTop ?? 4001 + (skillsRef.current?.offsetHeight ?? 4000),
      },
      {
        id: 'projects',
        name: 'Projetos',
        positionTop: projectsRef.current?.offsetTop ?? 8001,
        positionBottom: projectsRef.current?.offsetTop ?? 8001 + (projectsRef.current?.offsetHeight ?? 4000),
      },
      {
        id: 'services',
        name: 'Serviços',
        positionTop: servicesRef.current?.offsetTop ?? 12001,
        positionBottom: servicesRef.current?.offsetTop ?? 12001 + (servicesRef.current?.offsetHeight ?? 4000),
      },
    ]
  )

  function hadleActiveSection(){
    // setActiveSection(window.location.pathname)
  }

  useEffect(()=> {
    const headerHeight = Number(headerRef.current?.offsetHeight ?? 74)
    const newsSectionValues =  [
      {
        id: 'home',
        name: 'Início',
        positionTop: Number(homeRef.current?.offsetTop ?? 0) - headerHeight,
        positionBottom: Number(homeRef.current?.offsetTop ?? 0) + Number(homeRef.current?.offsetHeight ?? 4000) - headerHeight,
      },
      {
        id: 'skills',
        name: 'Habilidades',
        positionTop: Number(skillsRef.current?.offsetTop ?? 4001) - headerHeight,
        positionBottom: Number(skillsRef.current?.offsetTop ?? 4001) + Number(skillsRef.current?.offsetHeight ?? 4000) - headerHeight ,
      },
      {
        id: 'projects',
        name: 'Projetos',
        positionTop: Number(projectsRef.current?.offsetTop ?? 8002) - headerHeight,
        positionBottom: Number(projectsRef.current?.offsetTop ?? 8002) + Number(projectsRef.current?.offsetHeight ?? 4000) - headerHeight,
      },
      {
        id: 'services',
        name: 'Serviços',
        positionTop: Number(servicesRef.current?.offsetTop ?? 12004) - headerHeight,
        positionBottom: Number(servicesRef.current?.offsetTop ?? 12004) + Number(servicesRef.current?.offsetHeight ?? 4000) - headerHeight,
      },
    ]
    setSections(newsSectionValues)
  }, [homeRef, skillsRef, projectsRef, servicesRef, headerRef])


  return (
    <header ref={headerRef} className={clsx(
      'sticky top-0 z-10',
      {
        'dark:bg-black-600 dark:shadow-none shadow-sm bg-white-400': scrollPosition > 0
      }
    )}>
      <nav className="w-full py-5 my-0 mx-auto flex items-center justify-between max-w-5xl" >
        <div className="flex items-center justify-between gap-6" onClick={hadleActiveSection}>
          {
            sections.map(({id, name, positionTop, positionBottom}) => {
              const isSelected = scrollPosition >= positionTop && scrollPosition <= positionBottom
              return (
                <a key={id} href={`#${id}`} className={clsx(
                  `relative after:absolute hover:after:w-3/4 after:h-[.2rem] after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:rounded-full after:bg-blue-800 after:dark:bg-blue-400 after:transition-width`,
                  'hover:text-blue-800 hover:dark:text-blue-400',
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