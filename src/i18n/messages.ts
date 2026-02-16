export const SUPPORTED_LANGUAGES = ['pt', 'es', 'en'] as const

export type AppLanguage = (typeof SUPPORTED_LANGUAGES)[number]

export const LANGUAGE_LOCALES: Record<AppLanguage, string> = {
  pt: 'pt-BR',
  es: 'es-ES',
  en: 'en-US',
}

interface LanguageOption {
  short: string
  label: string
}

export interface I18nMessages {
  navigation: {
    home: string
    skills: string
    projects: string
    articles: string
  }
  header: {
    logoAlt: string
    menuTitle: string
    openMenuAria: string
    closeMenuAria: string
    contactButton: string
    contactAria: string
  }
  languageSwitcher: {
    triggerAria: string
    title: string
    closeAria: string
    options: Record<AppLanguage, LanguageOption>
  }
  home: {
    greetingMorning: string
    greetingAfternoon: string
    greetingEvening: string
    introSuffix: string
    aboutMe: string
    resumeButton: string
    profileAlt: string
  }
  sections: {
    skills: string
    projects: string
    articles: string
  }
  skills: {
    languagesTitle: string
    frameworksTitle: string
    patternsTitle: string
    softSkillsTitle: string
    softSkillsItems: string[]
  }
  typewriter: string[]
  projectCard: {
    closeAria: string
    technologiesTitle: string
    aboutApplicationTitle: string
    contributionsTitle: string
    accessApplicationTitle: string
  }
  articleCard: {
    descriptionTitle: string
    tagsTitle: string
    publishedAt: string
    readingTime: string
    minutes: string
  }
  viewCounter: {
    title: string
  }
}

export const MESSAGES: Record<AppLanguage, I18nMessages> = {
  pt: {
    navigation: {
      home: 'Início',
      skills: 'Habilidades',
      projects: 'Projetos',
      articles: 'Artigos',
    },
    header: {
      logoAlt: 'Logo Portfólio',
      menuTitle: 'Menu',
      openMenuAria: 'Abrir menu',
      closeMenuAria: 'Fechar menu',
      contactButton: 'entrar em contato',
      contactAria: 'Entrar em contato',
    },
    languageSwitcher: {
      triggerAria: 'Alterar idioma',
      title: 'Idioma',
      closeAria: 'Fechar seleção de idioma',
      options: {
        pt: { short: 'PT', label: 'Português' },
        es: { short: 'ES', label: 'Español' },
        en: { short: 'EN', label: 'English' },
      },
    },
    home: {
      greetingMorning: 'Bom dia',
      greetingAfternoon: 'Boa tarde',
      greetingEvening: 'Boa noite',
      introSuffix: 'eu sou',
      aboutMe:
        'Desenvolvedor Front-end com foco em React, Next.js e Vue.js, graduado em Sistemas de Informação pela UFC. Com mais de 5 anos de experiência, atuo no desenvolvimento de interfaces modernas, acessíveis e centradas no usuário. Apaixonado por tecnologia, comecei a programar aos 15 anos e, hoje, uno design e código para entregar soluções completas, com forte foco em performance, UX e escalabilidade.',
      resumeButton: 'ver currículo',
      profileAlt: 'Imagem Evenilson',
    },
    sections: {
      skills: 'Habilidades',
      projects: 'Projetos',
      articles: 'Artigos',
    },
    skills: {
      languagesTitle: 'Linguagens',
      frameworksTitle: 'Frameworks, bibliotecas e outros',
      patternsTitle: 'Padrões e outros',
      softSkillsTitle: 'Sociais',
      softSkillsItems: [
        'Comunicação clara e assertiva',
        'Empatia e escuta ativa',
        'Gestão eficiente do tempo e prioridades',
        'Inteligência emocional',
        'Pensamento criativo e inovação',
        'Colaboração e trabalho em equipe',
        'Capacidade de resolução de problemas',
        'Mentalidade aberta e receptiva a feedbacks',
        'Foco em acessibilidade e experiência do usuário',
      ],
    },
    typewriter: [
      'Evenilson Liandro',
      'dev Front-end',
      'esp. em React.js',
      'apaixonado por UI/UX',
      'solucionador de bugs',
      'fã de animações',
      'defensor da A11Y',
    ],
    projectCard: {
      closeAria: 'Fechar detalhes do projeto',
      technologiesTitle: 'Tecnologias utilizadas',
      aboutApplicationTitle: 'Sobre a aplicação',
      contributionsTitle: 'Minhas contribuições',
      accessApplicationTitle: 'Acesse a aplicação',
    },
    articleCard: {
      descriptionTitle: 'Descrição',
      tagsTitle: 'Tags',
      publishedAt: 'Publicado em',
      readingTime: 'Leitura em',
      minutes: 'minutos',
    },
    viewCounter: {
      title: 'Contador de visitas',
    },
  },
  es: {
    navigation: {
      home: 'Inicio',
      skills: 'Habilidades',
      projects: 'Proyectos',
      articles: 'Artículos',
    },
    header: {
      logoAlt: 'Logo del portafolio',
      menuTitle: 'Menú',
      openMenuAria: 'Abrir menú',
      closeMenuAria: 'Cerrar menú',
      contactButton: 'contactar',
      contactAria: 'Contactar',
    },
    languageSwitcher: {
      triggerAria: 'Cambiar idioma',
      title: 'Idioma',
      closeAria: 'Cerrar selector de idioma',
      options: {
        pt: { short: 'PT', label: 'Português' },
        es: { short: 'ES', label: 'Español' },
        en: { short: 'EN', label: 'English' },
      },
    },
    home: {
      greetingMorning: 'Buenos días',
      greetingAfternoon: 'Buenas tardes',
      greetingEvening: 'Buenas noches',
      introSuffix: 'soy',
      aboutMe:
        'Desarrollador Front-end centrado en React, Next.js y Vue.js, graduado en Sistemas de Información por la UFC. Con más de 5 años de experiencia, trabajo en el desarrollo de interfaces modernas, accesibles y enfocadas en el usuario. Apasionado por la tecnología, empecé a programar a los 15 años y hoy combino diseño y código para entregar soluciones completas, con fuerte enfoque en rendimiento, UX y escalabilidad.',
      resumeButton: 'ver currículo',
      profileAlt: 'Imagen de Evenilson',
    },
    sections: {
      skills: 'Habilidades',
      projects: 'Proyectos',
      articles: 'Artículos',
    },
    skills: {
      languagesTitle: 'Lenguajes',
      frameworksTitle: 'Frameworks, bibliotecas y otros',
      patternsTitle: 'Patrones y otros',
      softSkillsTitle: 'Sociales',
      softSkillsItems: [
        'Comunicación clara y asertiva',
        'Empatía y escucha activa',
        'Gestión eficiente del tiempo y prioridades',
        'Inteligencia emocional',
        'Pensamiento creativo e innovación',
        'Colaboración y trabajo en equipo',
        'Capacidad para resolver problemas',
        'Mentalidad abierta y receptiva al feedback',
        'Enfoque en accesibilidad y experiencia del usuario',
      ],
    },
    typewriter: [
      'Evenilson Liandro',
      'desarrollador Front-end',
      'esp. en React.js',
      'apasionado por UI/UX',
      'solucionador de bugs',
      'fan de animaciones',
      'defensor de A11Y',
    ],
    projectCard: {
      closeAria: 'Cerrar detalles del proyecto',
      technologiesTitle: 'Tecnologías utilizadas',
      aboutApplicationTitle: 'Sobre la aplicación',
      contributionsTitle: 'Mis contribuciones',
      accessApplicationTitle: 'Accede a la aplicación',
    },
    articleCard: {
      descriptionTitle: 'Descripción',
      tagsTitle: 'Etiquetas',
      publishedAt: 'Publicado el',
      readingTime: 'Lectura en',
      minutes: 'minutos',
    },
    viewCounter: {
      title: 'Contador de visitas',
    },
  },
  en: {
    navigation: {
      home: 'Home',
      skills: 'Skills',
      projects: 'Projects',
      articles: 'Articles',
    },
    header: {
      logoAlt: 'Portfolio logo',
      menuTitle: 'Menu',
      openMenuAria: 'Open menu',
      closeMenuAria: 'Close menu',
      contactButton: 'contact me',
      contactAria: 'Contact me',
    },
    languageSwitcher: {
      triggerAria: 'Change language',
      title: 'Language',
      closeAria: 'Close language selector',
      options: {
        pt: { short: 'PT', label: 'Português' },
        es: { short: 'ES', label: 'Español' },
        en: { short: 'EN', label: 'English' },
      },
    },
    home: {
      greetingMorning: 'Good morning',
      greetingAfternoon: 'Good afternoon',
      greetingEvening: 'Good evening',
      introSuffix: 'I am',
      aboutMe:
        'Front-end developer focused on React, Next.js, and Vue.js, with a degree in Information Systems from UFC. With more than 5 years of experience, I build modern, accessible, and user-centered interfaces. Passionate about technology, I started programming at 15 and today I combine design and code to deliver complete solutions with a strong focus on performance, UX, and scalability.',
      resumeButton: 'view resume',
      profileAlt: 'Evenilson photo',
    },
    sections: {
      skills: 'Skills',
      projects: 'Projects',
      articles: 'Articles',
    },
    skills: {
      languagesTitle: 'Languages',
      frameworksTitle: 'Frameworks, libraries, and others',
      patternsTitle: 'Patterns and others',
      softSkillsTitle: 'Soft skills',
      softSkillsItems: [
        'Clear and assertive communication',
        'Empathy and active listening',
        'Efficient time and priority management',
        'Emotional intelligence',
        'Creative thinking and innovation',
        'Collaboration and teamwork',
        'Problem-solving skills',
        'Open mindset and receptiveness to feedback',
        'Focus on accessibility and user experience',
      ],
    },
    typewriter: [
      'Evenilson Liandro',
      'Front-end developer',
      'React.js specialist',
      'UI/UX enthusiast',
      'bug solver',
      'animation fan',
      'A11Y advocate',
    ],
    projectCard: {
      closeAria: 'Close project details',
      technologiesTitle: 'Technologies used',
      aboutApplicationTitle: 'About the application',
      contributionsTitle: 'My contributions',
      accessApplicationTitle: 'Access the application',
    },
    articleCard: {
      descriptionTitle: 'Description',
      tagsTitle: 'Tags',
      publishedAt: 'Published on',
      readingTime: 'Read time',
      minutes: 'minutes',
    },
    viewCounter: {
      title: 'View counter',
    },
  },
}
