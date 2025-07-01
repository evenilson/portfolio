import { useQuery } from '@tanstack/react-query'
import { FilePdf } from 'phosphor-react'
import { useMemo, useRef } from 'react'

import {
  ArticleCard,
  HardSkillCard,
  Header,
  ProjectCard,
  ScrollReveal,
  SectionCard,
  SocialMediasArea,
  TypeWriter,
} from '@/components'
import { SKILLS } from '@/utils/constants/skills'

import evenilsonImg from './assets/img/evenilson.png'
import { Button, Heading, Text } from './components/ui'
import { useActiveSection } from './hooks'
import { GetDevToPosts } from './services/getDevToPosts'
import { PROJECTS } from './utils/constants/projects'

function App() {
  const homeRef = useRef<HTMLElement | null>(null)
  const skillsRef = useRef<HTMLElement | null>(null)
  const projectsRef = useRef<HTMLElement | null>(null)
  const articlesRef = useRef<HTMLElement | null>(null)

  const sectionRefs = useMemo(
    () => ({
      home: homeRef,
      skills: skillsRef,
      projects: projectsRef,
      articlesRef: articlesRef,
    }),
    []
  )

  const activeSection = useActiveSection(sectionRefs) ?? ''

  const { data: devToPostList } = useQuery({
    queryKey: ['dev-to-post-list'],
    queryFn: GetDevToPosts,
    refetchOnWindowFocus: false,
  })

  return (
    <>
      <Header activeSection={activeSection} />
      <SocialMediasArea />
      <main className="px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-7">
        <section
          className="pt-20 md:my-28 mx-auto max-w-5xl flex items-center justify-between flex-col-reverse md:flex-row"
          id="home"
          ref={homeRef}
        >
          <div>
            <Text className="text-[2rem] font-light block leading-none" size="none">
              Olá, eu sou
            </Text>
            <Text
              className="font-mono text-[4rem] font-bold block tracking-tight w-fit my-4"
              size="none"
            >
              <TypeWriter />
            </Text>
            <Text className="font-light block max-w-[30rem] leading-8" size="md">
              Desenvolvedor Front-end com foco em React, Next.js e Vue.js, graduado em Sistemas de
              Informação pela UFC. Com mais de 5 anos de experiência, atuo no desenvolvimento de
              interfaces modernas, acessíveis e centradas no usuário. Apaixonado por tecnologia,
              comecei a programar aos 15 anos e, hoje, uno design e código para entregar soluções
              completas, com forte foco em performance, UX e escalabilidade.
            </Text>
            <Button
              className="w-max flex items-center gap-2 mt-8"
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/151Ot9fxdbaKfFh87k-KrWZfs27mFm4tx/view?usp=sharing',
                  '_blank'
                )
              }
            >
              <Text className="uppercase items-center pt-1">ver curriculo</Text>
              <FilePdf size={20} />
            </Button>
          </div>
          <img src={evenilsonImg} alt="Imagem Evenilson" className="w-96" />
        </section>
        <SectionCard
          title="Habilidades"
          id="skills"
          ref={skillsRef}
          isActive={activeSection === 'skills'}
        >
          <div className="pt-10 grid grid-cols-1 justify-items-center md:justify-items-start md:grid-cols-2 gap-10">
            <div className="max-w-[30rem] w-full">
              <Heading size="sm" className="uppercase font-light mb-2">
                Linguagens
              </Heading>
              {SKILLS.hardSkills.languages.map(({ name, stars, icon }, index) => (
                <HardSkillCard name={name} stars={stars} icon={icon} index={index + 1} />
              ))}
            </div>
            <div className="max-w-[30rem] w-full">
              <Heading size="sm" className="uppercase font-light mb-2">
                Frameworks, Bibliotecas e outros
              </Heading>
              {SKILLS.hardSkills.frameworks.map(({ name, stars, icon }, index) => (
                <HardSkillCard name={name} stars={stars} icon={icon} index={index + 1} />
              ))}
            </div>

            <ScrollReveal index={0}>
              <div className="max-w-[30rem] w-full">
                <Heading size="sm" className="uppercase font-light mb-2">
                  Padrões e outros
                </Heading>
                {SKILLS.hardSkills.patterns.map(({ name, stars, icon }, index) => (
                  <HardSkillCard name={name} stars={stars} icon={icon} index={index + 1} />
                ))}
              </div>
            </ScrollReveal>
            <div className="max-w-[30rem] w-full">
              <Heading size="sm" className="uppercase font-light mb-6">
                Sociais
              </Heading>
              <div className="space-y-6">
                {SKILLS.softSkills.items.map((softSkill, index) => (
                  <ScrollReveal key={softSkill} index={index}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {SKILLS.softSkills.icon}
                        <p>{softSkill}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>
        <SectionCard
          title="Projetos"
          id="projects"
          ref={projectsRef}
          isActive={activeSection === 'projects'}
        >
          <div className="flex gap-8 my-10 flex-wrap justify-center">
            {PROJECTS.map(
              ({ id, title, description, image, url, badges, myContributions }, index) => (
                <ScrollReveal key={id} index={index}>
                  <ProjectCard
                    title={title}
                    description={description}
                    image={image}
                    url={url}
                    badges={badges}
                    myContributions={myContributions}
                  />
                </ScrollReveal>
              )
            )}
          </div>
        </SectionCard>
        <SectionCard
          title="Artigos"
          id="articles"
          ref={articlesRef}
          isActive={activeSection === 'articles'}
        >
          <div className="flex flex-col items-center justify-center my-10 gap-8">
            {devToPostList?.map((article, index) => (
              <ScrollReveal key={article.id} index={index} className="w-full">
                <ArticleCard article={article} />
              </ScrollReveal>
            ))}
          </div>
        </SectionCard>
      </main>
    </>
  )
}

export default App
