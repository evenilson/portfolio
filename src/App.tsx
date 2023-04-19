import { useRef } from "react"
import { Header } from "./components/Header"
import { SocialMediasArea } from "./components/SocialMediasArea"
import { Heading } from "./components/UI/Heading"

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
      <section className="h-[5000px]" id="home" ref={homeRef}>
        <Heading size="lg">
          Evenilson Liandro
        </Heading>
      </section>
      <section className="h-[5000px]" id="skills" ref={skillsRef}>
        <Heading size="lg">
          Habilidades
        </Heading>
      </section>
      <section className="h-[5000px]" id="projects" ref={projectsRef}>
        <Heading size="lg">
          Projetos
        </Heading>
      </section>
      <section className="h-[5000px]" id="services" ref={servicesRef}>
        <Heading size="lg">
          Services
        </Heading>
      </section>
      

    </>
  )
}

export default App
