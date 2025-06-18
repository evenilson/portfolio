import { useMemo, useRef } from 'react';

import { FilePdf } from 'phosphor-react';

import evenilsonImg from './assets/img/evenilson.png';

import cv from './assets/CV - EVENILSON.pdf';
import { Header, SectionCard, SocialMediasArea, Stars, TypeWriter } from '@/components';
import { Heading, Text, Button } from './components/ui';
import { SKILLS } from '@/utils/skills';
import { useActiveSection } from './hooks';
import pointSvg from '@/assets/icons/point.svg';

function App() {
  const homeRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  // const projectsRef = useRef<HTMLElement | null>(null);
  // const servicesRef = useRef<HTMLElement | null>(null);

  const sectionRefs = useMemo(
    () => ({
      home: homeRef,
      skills: skillsRef,
      // projects: projectsRef,
      // services: servicesRef,
    }),
    [],
  );

  const activeSection = useActiveSection(sectionRefs) ?? '';

  return (
    <>
      <Header activeSection={activeSection} />
      <SocialMediasArea />
      <main className="px-1 sm:px-2 md:px-3 lg:px-4 xl:px-5 2xl:px-6">
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
              className="font-mono text-[4rem] font-bold block tracking-tight w-fit"
              size="none"
            >
              <TypeWriter />
            </Text>
            <Text className="font-light block max-w-[30rem]" size="sm">
              Iniciei na programação aos meus 15 anos, onde tive os primeiros contatos com a lógica
              de programação, além de HTML e CSS. Após isso, comecei a utilizar o React.js,
              utilizando conceitos importantes no desenvolvimento de interfaces. Contudo, sempre
              mantive uma paixão por UX e UI, onde pude contribuir em alguns projetos.
            </Text>
            <Button
              className="w-max flex items-center gap-2 mt-8"
              onClick={() => window.open(cv, '_blank')}
            >
              <Text className="uppercase items-center pt-1">ver curriculo</Text>
              <FilePdf size={20} />
            </Button>
          </div>
          <img src={evenilsonImg} alt="Imagem Evenilson" className="w-96 animated " />
        </section>
        <SectionCard
          title="Habilidades"
          id="skills"
          ref={skillsRef}
          isActive={activeSection === 'skills'}
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
                      <Stars name={name} starsNumber={stars} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="max-w-[30rem] w-full animated">
              <Heading size="sm" className="uppercase font-light mb-2">
                Frameworks, Bibliotecas e outros
              </Heading>
              {SKILLS.hardSkills.frameworks.map(({ name, stars, icon }) => {
                return (
                  <div key={name} className="flex items-center justify-between animated">
                    <div className="flex items-center gap-4">
                      {icon}
                      <p>{name}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Stars name={name} starsNumber={stars} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="max-w-[30rem] w-full animated">
              <Heading size="sm" className="uppercase font-light mb-2">
                Padrões e outros
              </Heading>
              {SKILLS.hardSkills.patterns.map(({ name, stars, icon }) => {
                return (
                  <div key={name} className="flex items-center justify-between animated">
                    <div className="flex items-center gap-4">
                      {icon}
                      <p>{name}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Stars name={name} starsNumber={stars} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="max-w-[30rem] w-full animated">
              <Heading size="sm" className="uppercase font-light mb-6">
                Soft Skills
              </Heading>
              <div className="space-y-6">
                {SKILLS.softSkills.map((softSkill) => {
                  return (
                    <div key={softSkill} className="flex items-center justify-between animated">
                      <div className="flex items-center gap-4">
                        <img src={pointSvg} alt={'Ponto de lista'} />
                        <p>{softSkill}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </SectionCard>
      </main>
    </>
  );
}

export default App;
