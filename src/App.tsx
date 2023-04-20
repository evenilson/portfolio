import { useRef } from "react"
import { Header } from "./components/Header"
import { SocialMediasArea } from "./components/SocialMediasArea"
import { Heading } from "./components/UI/Heading"
import { Text } from "./components/UI/Text"

import { Button } from "./components/UI/Button"
import { DownloadSimple, Eye, Eyedropper, EyeSlash, FilePdf } from "phosphor-react"

import evenilsonImg from './assets/img/evenilson.png';

import cv from './assets/CV - EVENILSON.pdf';

function App() {

  const headerRef = useRef<HTMLElement>(null)
  const homeRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)

  return (
    <>
      <Header headerRef={headerRef} homeRef={homeRef} skillsRef={skillsRef} projectsRef={projectsRef} servicesRef={servicesRef}/>
      <SocialMediasArea />
      <section className="pt-20 my-0 mx-auto max-w-5xl flex items-center justify-between" id="home" ref={homeRef}>
        <div className="">
          <Text className="text-[2rem] font-light block" size="none">
            Olá, eu sou
          </Text>
          <Text className="font-mono text-[4rem] font-bold uppercase block w-fit" size="none">
            Evenilson L.
          </Text>
          <Text className="font-light block max-w-[30rem]" size="sm">
              Iniciei na programação aos meus 15 anos, onde tive os 
              primeiros contatos com a lógica de programação, além de 
              HTML e CSS. Após isso, comecei a utilizar o React.js, 
              utilizando conceitos importantes no desenvolvimento de 
              interfaces. Contudo, sempre mantive uma paixão por UX e 
              UI, onde pude contribuir em alguns projetos. 
          </Text>
          <Button 
            className="w-max flex items-center gap-2 mt-8"
            onClick={()=> window.open(cv, '_blank')}
          >
            <Text className="uppercase items-center pt-1">
              ver curriculo
            </Text>
            <FilePdf size={20}/>
          </Button>
        </div>
        <img src={evenilsonImg} alt="" className="w-96" />
      </section>
      <section className="pt-20 my-0 mx-auto max-w-5xl" id="skills" ref={skillsRef}>
        <Heading size="lg">
          Habilidades
        </Heading>
      </section>
      {/* <section className="h-[5000px]" id="projects" ref={projectsRef}>
        <Heading size="lg">
          Projetos
        </Heading>
      </section> */}
      {/* <section className="h-[5000px]" id="services" ref={servicesRef}>
        <Heading size="lg">
          Services
        </Heading>
      </section> */}
      

    </>
  )
}

export default App
