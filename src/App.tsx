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
  ViewCounter,
} from '@/components'
import { useI18n } from '@/i18n'
import { SKILLS } from '@/utils/constants/skills'

import evenilsonImg from './assets/img/evenilson.png'
import { Button, Heading, Text } from './components/ui'
import { useActiveSection } from './hooks'
import { GetDevToPosts } from './services/getDevToPosts'
import { getProjects } from './utils/constants/projects'

function App() {
  const { language, messages } = useI18n()

  const homeRef = useRef<HTMLElement | null>(null)
  const skillsRef = useRef<HTMLElement | null>(null)
  const projectsRef = useRef<HTMLElement | null>(null)
  const articlesRef = useRef<HTMLElement | null>(null)

  const sectionRefs = useMemo(
    () => ({
      home: homeRef,
      skills: skillsRef,
      projects: projectsRef,
      articles: articlesRef,
    }),
    []
  )

  const activeSection = useActiveSection(sectionRefs) ?? ''

  const { data: devToPostList } = useQuery({
    queryKey: ['dev-to-post-list'],
    queryFn: GetDevToPosts,
    refetchOnWindowFocus: false,
  })

  const greeting = useMemo(() => {
    const hours = new Date().getHours()

    return hours < 12
      ? messages.home.greetingMorning
      : hours < 18
        ? messages.home.greetingAfternoon
        : messages.home.greetingEvening
  }, [
    messages.home.greetingAfternoon,
    messages.home.greetingEvening,
    messages.home.greetingMorning,
  ])

  const projects = useMemo(() => getProjects(language), [language])

  return (
    <>
      <Header activeSection={activeSection} />
      <SocialMediasArea />
      <main className="px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-7">
        <div className="w-full flex justify-end mt-10 mx-auto max-w-5xl">
          <ViewCounter />
        </div>
        <section
          className="pt-5 md:my-28 mx-auto max-w-5xl flex items-center justify-between flex-col-reverse md:flex-row"
          id="home"
          ref={homeRef}
        >
          <div>
            <Text
              className="text-[1.5rem] sm:text-[2rem] font-light block leading-none"
              size="none"
            >
              {greeting}, {messages.home.introSuffix}
            </Text>
            <Text
              className="font-mono font-bold block tracking-tight w-fit mt-2 sm:mt-4 mb-4 sm:mb-8"
              size="none"
            >
              <TypeWriter />
            </Text>
            <Text className="font-light block max-w-[30rem] leading-8" size="md">
              {messages.home.aboutMe}
            </Text>
            <Button
              className="w-max flex items-center gap-2 mt-8"
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1YrIIPXcync65i3GpWqdyGCZENWM7BkUl/view?usp=sharing',
                  '_blank'
                )
              }
            >
              <Text className="uppercase items-center pt-1">{messages.home.resumeButton}</Text>
              <FilePdf size={20} />
            </Button>
          </div>
          <img
            src={evenilsonImg}
            alt={messages.home.profileAlt}
            className="w-72 my-4 sm:w-96 animate-[bounce_10s_ease-in-out_infinite]"
          />
        </section>
        <SectionCard
          title={messages.sections.skills}
          id="skills"
          ref={skillsRef}
          isActive={activeSection === 'skills'}
        >
          <div className="pt-10 grid grid-cols-1 justify-items-center md:justify-items-start md:grid-cols-2 gap-10">
            <div className="max-w-[30rem] w-full">
              <Heading size="sm" className="uppercase font-light mb-2">
                {messages.skills.languagesTitle}
              </Heading>
              {SKILLS.hardSkills.languages.map(({ name, stars, icon }, index) => (
                <HardSkillCard key={name} name={name} stars={stars} icon={icon} index={index + 1} />
              ))}
            </div>
            <div className="max-w-[30rem] w-full">
              <Heading size="sm" className="uppercase font-light mb-2">
                {messages.skills.frameworksTitle}
              </Heading>
              {SKILLS.hardSkills.frameworks.map(({ name, stars, icon }, index) => (
                <HardSkillCard key={name} name={name} stars={stars} icon={icon} index={index + 1} />
              ))}
            </div>

            <div className="max-w-[30rem] w-full">
              <Heading size="sm" className="uppercase font-light mb-2">
                {messages.skills.patternsTitle}
              </Heading>
              {SKILLS.hardSkills.patterns.map(({ name, stars, icon }, index) => (
                <HardSkillCard key={name} name={name} stars={stars} icon={icon} index={index} />
              ))}
            </div>

            <div className="max-w-[30rem] w-full">
              <Heading size="sm" className="uppercase font-light mb-6">
                {messages.skills.softSkillsTitle}
              </Heading>
              <div className="space-y-6">
                {messages.skills.softSkillsItems.map((softSkill, index) => (
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
          title={messages.sections.projects}
          id="projects"
          ref={projectsRef}
          isActive={activeSection === 'projects'}
        >
          <div className="flex gap-8 my-10 flex-wrap justify-center">
            {projects.map(
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
          title={messages.sections.articles}
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
