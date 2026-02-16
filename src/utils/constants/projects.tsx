import logoAcessoCidadao from '@/assets/svgs/projects/logo-acesso-cidadao.svg'
import logoBigDataSocial from '@/assets/svgs/projects/logo-big-data-social.svg'
import logoCearaLid from '@/assets/svgs/projects/logo-ceara-lid.svg'
import logoFacilitaMais from '@/assets/svgs/projects/logo-facilitamais.svg'
import logoIntegraSocial from '@/assets/svgs/projects/logo-integra-social.svg'
import logoObservai from '@/assets/svgs/projects/logo-observai.svg'
import logoPlataformaMaisInfancia from '@/assets/svgs/projects/logo-plataforma-mais-infancia.svg'
import logoSuite from '@/assets/svgs/projects/logo-suite.svg'
import { AppLanguage } from '@/i18n'
import { ProjectInterface } from '@/types/general'

type ProjectLocalizedFields = Pick<ProjectInterface, 'title' | 'description' | 'myContributions'>

interface ProjectBase extends Omit<ProjectInterface, 'title' | 'description' | 'myContributions'> {
  translations: Record<AppLanguage, ProjectLocalizedFields>
}

const PROJECTS_BASE: ProjectBase[] = [
  {
    id: 'project-1',
    url: 'https://spssocial.sps.ce.gov.br/programa-mais-infancia',
    badges: [
      { name: 'React', color: 'blue' },
      { name: 'TypeScript', color: 'purple' },
      { name: 'Sass', color: 'pink' },
      { name: 'Context API', color: 'blue' },
      { name: 'Ant Design', color: 'orange' },
      { name: 'BEM', color: 'gray' },
    ],
    image: logoPlataformaMaisInfancia,
    translations: {
      pt: {
        title: 'Plataforma Mais Infância',
        description:
          'Desenvolvida pelo Iris - Laboratório de Inovação e Dados, a Plataforma Mais Infância oferece um painel para acompanhar as ações do programa, aprimorar iniciativas e monitorar os impactos alcançados.',
        myContributions:
          'Atuei no desenvolvimento do frontend da aplicação, com foco na criação de interfaces responsivas, integração com APIs, implementação da Context API para gerenciamento de estado, desenvolvimento de telas administrativas e criação de animações.',
      },
      es: {
        title: 'Plataforma Mais Infância',
        description:
          'Desarrollada por Iris - Laboratorio de Innovación y Datos, la Plataforma Mais Infância ofrece un panel para seguir las acciones del programa, mejorar iniciativas y monitorear los impactos alcanzados.',
        myContributions:
          'Trabajé en el desarrollo del frontend de la aplicación, con foco en interfaces responsivas, integración con APIs, implementación de Context API para gestión de estado, desarrollo de pantallas administrativas y creación de animaciones.',
      },
      en: {
        title: 'Mais Infância Platform',
        description:
          'Developed by Iris - Innovation and Data Lab, the Mais Infância Platform provides a dashboard to monitor program actions, improve initiatives, and track achieved impacts.',
        myContributions:
          'I worked on the frontend development of the application, focusing on responsive interfaces, API integration, Context API state management, administrative screens, and animations.',
      },
    },
  },
  {
    id: 'project-2',
    url: 'https://bigdatasocial.seplag.ce.gov.br/integrasocial/pesquisa',
    badges: [
      { name: 'React', color: 'blue' },
      { name: 'TypeScript', color: 'purple' },
      { name: 'Sass', color: 'pink' },
      { name: 'Context API', color: 'blue' },
      { name: 'Ant Design', color: 'orange' },
      { name: 'BEM', color: 'gray' },
    ],
    image: logoIntegraSocial,
    translations: {
      pt: {
        title: 'Integra Social',
        description:
          'Desenvolvido pelo Iris - Laboratório de Inovação e Dados, o Integra Social aproxima o cidadão do Governo do Estado do Ceará por meio do mapeamento de vulnerabilidades das famílias e de um sistema de recomendações de políticas públicas. A plataforma integra dados para apoiar decisões mais assertivas por parte dos gestores municipais e estaduais.',
        myContributions:
          'Responsável pelo desenvolvimento do frontend da aplicação, incluindo criação de interfaces responsivas, integração com APIs, desenvolvimento de painéis administrativos e participação ativa na definição de tecnologias e decisões técnicas do front-end.',
      },
      es: {
        title: 'Integra Social',
        description:
          'Desarrollado por Iris - Laboratorio de Innovación y Datos, Integra Social acerca a la ciudadanía al Gobierno del Estado de Ceará mediante el mapeo de vulnerabilidades familiares y un sistema de recomendaciones de políticas públicas. La plataforma integra datos para apoyar decisiones más precisas de gestores municipales y estatales.',
        myContributions:
          'Responsable del desarrollo frontend de la aplicación, incluyendo interfaces responsivas, integración con APIs, paneles administrativos y participación activa en la definición tecnológica y decisiones técnicas del front-end.',
      },
      en: {
        title: 'Integra Social',
        description:
          'Developed by Iris - Innovation and Data Lab, Integra Social connects citizens with the Ceará State Government by mapping family vulnerabilities and providing a public policy recommendation system. The platform integrates data to support more assertive decisions by municipal and state managers.',
        myContributions:
          'I led frontend development, including responsive interfaces, API integrations, administrative dashboards, and active participation in frontend technology and architectural decisions.',
      },
    },
  },
  {
    id: 'project-3',
    url: 'https://bigdatasocial.irislab.ce.gov.br/',
    badges: [
      { name: 'React', color: 'blue' },
      { name: 'TypeScript', color: 'purple' },
      { name: 'Styled Components', color: 'pink' },
      { name: 'Ant Design', color: 'orange' },
      { name: 'D3.js', color: 'green' },
      { name: 'Leaflet', color: 'blue' },
    ],
    image: logoBigDataSocial,
    translations: {
      pt: {
        title: 'Big Data Social',
        description:
          'Desenvolvido pelo Iris - Laboratório de Inovação e Dados, o Big Data Social armazena grande volume de dados e oferece análises refinadas por meio de mineração de dados e painéis visuais. O objetivo é apoiar formuladores de políticas na exploração de informações sobre serviços destinados a famílias em situação de vulnerabilidade social extrema.',
        myContributions:
          'Responsável pela manutenção e desenvolvimento de novas funcionalidades no frontend da aplicação, com foco em melhorias incrementais e correções contínuas.',
      },
      es: {
        title: 'Big Data Social',
        description:
          'Desarrollado por Iris - Laboratorio de Innovación y Datos, Big Data Social almacena grandes volúmenes de datos y ofrece análisis avanzados mediante minería de datos y paneles visuales. Su objetivo es apoyar a quienes formulan políticas en la exploración de información sobre servicios para familias en situación de vulnerabilidad extrema.',
        myContributions:
          'Responsable del mantenimiento y del desarrollo de nuevas funcionalidades en el frontend, con foco en mejoras incrementales y correcciones continuas.',
      },
      en: {
        title: 'Big Data Social',
        description:
          'Developed by Iris - Innovation and Data Lab, Big Data Social stores large volumes of data and delivers refined analysis through data mining and visual dashboards. Its goal is to help policy makers explore information about services for families in situations of extreme social vulnerability.',
        myContributions:
          'I was responsible for frontend maintenance and new feature development, focusing on incremental improvements and continuous fixes.',
      },
    },
  },
  {
    id: 'project-4',
    url: 'https://acesso.cearadigital.ce.gov.br/acesso/app/home',
    badges: [
      { name: 'React', color: 'blue' },
      { name: 'TypeScript', color: 'purple' },
      { name: 'Sass', color: 'pink' },
      { name: 'Context API', color: 'blue' },
      { name: 'Ant Design', color: 'orange' },
      { name: 'BEM', color: 'gray' },
      { name: 'Styled Components', color: 'yellow' },
    ],
    image: logoAcessoCidadao,
    translations: {
      pt: {
        title: 'Acesso Cidadão',
        description:
          'Desenvolvido pelo Iris - Laboratório de Inovação e Dados, o Acesso Cidadão nasceu como ponto de acesso unificado para outras plataformas. Essa unificação melhora a comunicação entre aplicações e facilita o trânsito do cidadão entre serviços integrados.',
        myContributions:
          'Responsável pela manutenção e pelo desenvolvimento de novas funcionalidades no frontend da aplicação, com foco em melhorias incrementais e correções contínuas.',
      },
      es: {
        title: 'Acesso Cidadão',
        description:
          'Desarrollado por Iris - Laboratorio de Innovación y Datos, Acesso Cidadão nació como un punto de acceso unificado para otras plataformas. Esta unificación mejora la comunicación entre aplicaciones y facilita que la ciudadanía navegue entre servicios integrados.',
        myContributions:
          'Responsable del mantenimiento y del desarrollo de nuevas funcionalidades en el frontend, con foco en mejoras incrementales y correcciones continuas.',
      },
      en: {
        title: 'Citizen Access',
        description:
          'Developed by Iris - Innovation and Data Lab, Citizen Access was created as a unified entry point for multiple platforms. This integration improves communication between applications and makes it easier for citizens to navigate across integrated services.',
        myContributions:
          'I was responsible for frontend maintenance and new feature development, focusing on incremental improvements and continuous fixes.',
      },
    },
  },
  {
    id: 'project-5',
    url: 'https://observai.cearadigital.ce.gov.br/',
    badges: [
      { name: 'React', color: 'blue' },
      { name: 'TypeScript', color: 'purple' },
      { name: 'Tailwind', color: 'pink' },
      { name: 'Shadcn', color: 'yellow' },
      { name: 'Zod', color: 'purple' },
      { name: 'React Query', color: 'orange' },
      { name: 'React Hook Form', color: 'blue' },
    ],
    image: logoObservai,
    translations: {
      pt: {
        title: 'ObservAÍ',
        description:
          'Desenvolvido pela SEPLAG (Secretaria de Planejamento e Gestão), o ObservAÍ reúne informações sobre saúde, educação, segurança e meio ambiente em um só lugar. Com apoio da inteligência artificial do Ceará (CE.IA), os dados são transformados em informações acessíveis para monitoramento e apoio à tomada de decisão do governo.',
        myContributions:
          'Responsável pelo desenvolvimento do frontend da aplicação, incluindo criação de interfaces responsivas, integração com APIs, desenvolvimento de painéis administrativos e participação ativa em decisões técnicas e definição de tecnologias.',
      },
      es: {
        title: 'ObservAÍ',
        description:
          'Desarrollado por SEPLAG (Secretaría de Planificación y Gestión), ObservAÍ reúne información sobre salud, educación, seguridad y medio ambiente en un solo lugar. Con apoyo de la inteligencia artificial de Ceará (CE.IA), los datos se transforman en información clara para seguimiento y apoyo a la toma de decisiones gubernamentales.',
        myContributions:
          'Responsable del desarrollo frontend, incluyendo interfaces responsivas, integración con APIs, paneles administrativos y participación activa en decisiones técnicas y definición de tecnologías.',
      },
      en: {
        title: 'ObservAÍ',
        description:
          'Developed by SEPLAG (Planning and Management Secretariat), ObservAÍ brings together relevant data about health, education, public safety, and the environment in one place. With support from Ceará AI (CE.IA), data is transformed into accessible information to monitor indicators and support government decision-making.',
        myContributions:
          'I was responsible for frontend development, including responsive interfaces, API integration, administrative dashboards, and active participation in technical decisions and technology choices.',
      },
    },
  },
  {
    id: 'project-6',
    url: 'https://cearalid.seplag.ce.gov.br',
    badges: [
      { name: 'React', color: 'blue' },
      { name: 'TypeScript', color: 'purple' },
      { name: 'Tailwind', color: 'pink' },
      { name: 'Shadcn', color: 'yellow' },
      { name: 'Zod', color: 'purple' },
      { name: 'React Query', color: 'orange' },
      { name: 'React Hook Form', color: 'blue' },
    ],
    image: logoCearaLid,
    translations: {
      pt: {
        title: 'Ceará Lid',
        description:
          'Desenvolvido pela SEPLAG (Secretaria de Planejamento e Gestão), o CearáLid reúne informações sobre vagas de emprego no governo estadual e ajuda órgãos públicos a identificar candidatos ideais para essas posições, otimizando o processo de recrutamento e seleção.',
        myContributions:
          'Responsável pelo desenvolvimento do frontend da aplicação, incluindo criação de interfaces responsivas, integração com APIs, desenvolvimento de painéis administrativos e participação ativa em decisões técnicas e definição de tecnologias.',
      },
      es: {
        title: 'Ceará Lid',
        description:
          'Desarrollado por SEPLAG (Secretaría de Planificación y Gestión), CearáLid reúne información sobre vacantes en el gobierno estadual y ayuda a las instituciones públicas a identificar candidatos ideales, optimizando procesos de reclutamiento y selección.',
        myContributions:
          'Responsable del desarrollo frontend, incluyendo interfaces responsivas, integración con APIs, paneles administrativos y participación activa en decisiones técnicas y definición de tecnologías.',
      },
      en: {
        title: 'Ceará Lid',
        description:
          'Developed by SEPLAG (Planning and Management Secretariat), CearáLid gathers information about state government job openings and helps public agencies identify ideal candidates, optimizing talent recruitment and selection.',
        myContributions:
          'I was responsible for frontend development, including responsive interfaces, API integrations, administrative dashboards, and active participation in technical decisions and technology choices.',
      },
    },
  },
  {
    id: 'project-7',
    url: 'https://suite.ce.gov.br/',
    badges: [
      { name: 'Vue', color: 'green' },
      { name: 'TypeScript', color: 'purple' },
      { name: 'SASS', color: 'pink' },
      { name: 'Buefy', color: 'blue' },
      { name: 'Jest', color: 'yellow' },
      { name: 'Cypress', color: 'orange' },
    ],
    image: logoSuite,
    translations: {
      pt: {
        title: 'SUITE',
        description:
          'Desenvolvido pela SEPLAG (Secretaria de Planejamento e Gestão), o SUITE tem como objetivo modernizar e unificar a tramitação de processos administrativos no Poder Executivo Estadual, substituindo processos físicos por uma solução 100% digital.',
        myContributions:
          'Responsável pela manutenção, com foco em melhorias incrementais e correções contínuas.',
      },
      es: {
        title: 'SUITE',
        description:
          'Desarrollado por SEPLAG (Secretaría de Planificación y Gestión), SUITE tiene como objetivo modernizar y unificar la tramitación de procesos administrativos del Poder Ejecutivo Estadual, reemplazando procesos físicos por una solución 100% digital.',
        myContributions:
          'Responsable del mantenimiento, con foco en mejoras incrementales y correcciones continuas.',
      },
      en: {
        title: 'SUITE',
        description:
          'Developed by SEPLAG (Planning and Management Secretariat), SUITE modernizes and unifies administrative process workflows in the State Executive branch, replacing physical processes with a fully digital solution.',
        myContributions:
          'I was responsible for maintenance work, focusing on incremental improvements and continuous fixes.',
      },
    },
  },
  {
    id: 'project-8',
    url: 'https://facilitamais.vercel.app/login',
    badges: [
      { name: 'React', color: 'blue' },
      { name: 'TypeScript', color: 'purple' },
      { name: 'Sass', color: 'pink' },
      { name: 'Context API', color: 'blue' },
      { name: 'Ant Design', color: 'orange' },
      { name: 'BEM', color: 'gray' },
      { name: 'Firebase', color: 'yellow' },
    ],
    image: logoFacilitaMais,
    translations: {
      pt: {
        title: 'Facilita+',
        description:
          'MVP da startup Facilita+, criada para facilitar o fluxo no mercado de trabalho com uma plataforma que conecta empresas e profissionais de forma rápida e prática.',
        myContributions:
          'Responsável pela criação do MVP da plataforma, atuando da prototipação ao desenvolvimento frontend e deployment, com foco em entrega ágil e eficiente.',
      },
      es: {
        title: 'Facilita+',
        description:
          'MVP de la startup Facilita+, creada para facilitar el flujo del mercado laboral con una plataforma que conecta empresas y profesionales de forma rápida y práctica.',
        myContributions:
          'Responsable por la creación del MVP de la plataforma, desde la prototipación hasta el desarrollo frontend y deployment, con foco en una entrega ágil y eficiente.',
      },
      en: {
        title: 'Facilita+',
        description:
          'MVP for the Facilita+ startup, created to streamline labor market flows through a platform that quickly and efficiently connects companies and professionals.',
        myContributions:
          'I was responsible for building the platform MVP end to end, from prototyping to frontend development and deployment, with a focus on fast and efficient delivery.',
      },
    },
  },
]

export function getProjects(language: AppLanguage): ProjectInterface[] {
  return PROJECTS_BASE.map(({ translations, ...project }) => ({
    ...project,
    ...translations[language],
  }))
}
