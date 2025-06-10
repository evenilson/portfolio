import { useMemo, useRef } from "react";

import { FilePdf, Star } from "phosphor-react"

import evenilsonImg from './assets/img/evenilson.png';

import cv from './assets/CV - EVENILSON.pdf';
import { Header, SectionCard, SocialMediasArea, TypeWriter } from "@/components"
import { Heading, Text, Button } from "./components/ui";
import { ABOUT_ME_LIST } from "@/utils/constants";
import { SKILLS } from "@/utils/skills";
import { useActiveSection } from "./hooks";


function App() {
  const homeRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null)
  const projectsRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null)

  const sectionRefs = useMemo(() => ({
    home: homeRef,
    skills: skillsRef,
    projects: projectsRef,
    services: servicesRef
  }), []); 

  const activeSection = useActiveSection(sectionRefs) ?? "";

  return (
    <>
      <Header activeSection={activeSection}/>
      <SocialMediasArea />
      <main className="px-1 sm:px-2 md:px-3 lg:px-4 xl:px-5 2xl:px-6">
        <section className="pt-20 my-0 mx-auto max-w-5xl flex items-center justify-between" id="home" ref={homeRef}>
          <div className="">
            <Text className="text-[2rem] font-light block leading-none" size="none">
              Olá, eu sou
            </Text>
            <Text className="font-mono text-[4rem] font-bold block tracking-tight w-fit" size="none">
              <TypeWriter texts={ABOUT_ME_LIST} delay={200} withCaret loop />
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
              onClick={() => window.open(cv, '_blank')}
            >
              <Text className="uppercase items-center pt-1">
                ver curriculo
              </Text>
              <FilePdf size={20} />
            </Button>
          </div>
          <img src={evenilsonImg} alt="Imagem Evenilson" className="w-96 hidden md:block animated " />
        </section>
        <SectionCard
          title="Habilidades"
          id="skills"
          ref={skillsRef}
        >
          <div className="pt-10 grid grid-cols-1 justify-items-center md:justify-items-start md:grid-cols-2 gap-10">
            <div className="max-w-[30rem] w-full animated">
              <Heading size="sm" className="uppercase font-light mb-2">
                Linguagens
              </Heading>
              {SKILLS.hardSkills.languages.map(({ name, stars, icon }) => {
                return (
                  <div key={name} className="flex items-center justify-between animated">
                    <div className="flex items-center gap-4">
                      {icon}
                      <p>{name}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {
                        Array(stars).fill('').map((_, starIdx) => {
                          return (
                            <Star key={`${name}-star-${starIdx}`} size={15} className="text-orange-800 animated" weight="fill" />
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="max-w-[30rem] w-full animated">
              <Heading size="sm" className="uppercase font-light mb-2">
                Frameworks
              </Heading>
              {SKILLS.hardSkills.frameworks.map(({ name, stars, icon }) => {
                return (
                  <div key={name} className="flex items-center justify-between animated">
                    <div className="flex items-center gap-4">
                      {icon}
                      <p>{name}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {
                        Array(stars).fill('').map((_, starIdx) => {
                          return (
                            <Star key={`${name}-star-${starIdx}`} size={15} className="text-orange-800 animated" weight="fill" />
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </SectionCard>
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
      </main>
    </>
  )
}

export default App
