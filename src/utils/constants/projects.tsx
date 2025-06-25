import { ProjectInterface } from '@/types/general';
import logoPlataformaMaisInfancia from '@/assets/projects/logo-plataforma-mais-infancia.svg';
import logoIntegraSocial from '@/assets/projects/logo-integra-social.svg';
import logoAcessoCidadao from '@/assets/projects/logo-acesso-cidadao.svg';
import logoBigDataSocial from '@/assets/projects/logo-big-data-social.svg';
import logoObservai from '@/assets/projects/logo-observai.svg';
import logoCearaLid from '@/assets/projects/logo-ceara-lid.svg';
import logoSuite from '@/assets/projects/logo-suite.svg';
import logoFacilitaMais from '@/assets/projects/logo-facilitamais.svg';

export const PROJECTS: ProjectInterface[] = [
  {
    id: 'project-1',
    title: 'Plataforma Mais Infância',
    description:
      'Desenvolido pelo Iris - Laboratório de Inovação e Dados, a A Plataforma Mais é um sistema que oferece um painel para acompanhar as ações do Programa Mais Infância, com o objetivo de aprimorar suas iniciativas e monitorar os impactos alcançados.',
    url: 'https://spssocial.sps.ce.gov.br/programa-mais-infancia',
    badges: [
      { name: 'React', color: 'blue' },
      { name: 'TypeScript', color: 'purple' },
      { name: 'Sass', color: 'pink' },
      { name: 'Context API', color: 'blue' },
      { name: 'Ant Design', color: 'orange' },
      { name: 'BEM', color: 'gray' },
    ],
    myContributions:
      'Atuei no desenvolvimento do frontend da aplicação, com foco na criação de interfaces responsivas, integração com APIs, implementação da Context API para gerenciamento de estado, desenvolvimento de telas administrativas, criação de animações e outras demandas relacionadas ao front-end.',
    image: logoPlataformaMaisInfancia,
  },
  {
    id: 'project-2',
    title: 'Integra Social',
    description:
      'Desenvolvido pelo Iris - Laboratório de Inovação e Dados, O Integra Social é uma plataforma que visa aproximar o cidadão do Governo do Estado do Ceará por meio do mapeamento de vulnerabilidades das famílias cearenses e um sistema de recomendações de políticas públicas capazes de melhorar a qualidade de vida dessas famílias. Para isso, utiliza informações das famílias retiradas dos bancos de dados do Governo Federal e da Secretaria de Proteção Social. Através da plataforma, os gestores a nível municipal e estadual podem contribuir para construir uma base orgânica de recomendações para as famílias. Portanto, a plataforma integra dados e informações para auxiliar em decisões mais assertivas.',
    url: 'https://bigdatasocial.seplag.ce.gov.br/integrasocial/pesquisa',
    badges: [
      { name: 'React', color: 'blue' },
      { name: 'TypeScript', color: 'purple' },
      { name: 'Sass', color: 'pink' },
      { name: 'Context API', color: 'blue' },
      { name: 'Ant Design', color: 'orange' },
      { name: 'BEM', color: 'gray' },
    ],
    myContributions:
      'Responsável pelo desenvolvimento do frontend da aplicação, incluindo a criação de interfaces responsivas, integração com APIs, desenvolvimento de painéis administrativos e outras demandas relacionadas à camada de apresentação. Também participei ativamente na definição de tecnologias e decisões técnicas voltadas ao front-end.',
    image: logoIntegraSocial,
  },
  {
    id: 'project-3',
    title: 'Big Data Social',
    description:
      'Desenvolvido pelo Iris - Laboratório de Inovação e Dados, o Big Data Social é uma plataforma que armazena uma grande quantidade de dados e também oferece uma análise refinada desses dados por meio de técnicas de mineração de dados e apresentação visual em painéis. Ela tem como objetivo auxiliar os formuladores de políticas a explorar a vasta quantidade de informações disponíveis sobre políticas e serviços destinados a famílias em situação de extrema vulnerabilidade social.',
    url: 'https://bigdatasocial.irislab.ce.gov.br/',
    badges: [
      { name: 'React', color: 'blue' },
      { name: 'TypeScript', color: 'purple' },
      { name: 'Styled Components', color: 'pink' },
      { name: 'Ant Design', color: 'orange' },
      { name: 'D3.js', color: 'green' },
      { name: 'Leaflet', color: 'blue' },
    ],
    myContributions:
      'Responsável pela manutenção e pelo desenvolvimento de novas funcionalidades no frontend da aplicação, com foco em melhorias incrementais e correções contínuas.',
    image: logoBigDataSocial,
  },
  {
    id: 'project-4',
    title: 'Acesso Cidadão',
    description:
      'Desenvolvido pelo Iris - Laboratório de Inovação e Dados, o Acesso Cidadão nasce como um ponto de acesso unificado para outras plataformas. A unificação desses acessos garante uma comunicação mais efetiva entre aplicações, facilitando para o cidadão transitar entre serviços ou ter acesso a plataformas integradas.',
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
    myContributions:
      'Responsável pela manutenção e pelo desenvolvimento de novas funcionalidades no frontend da aplicação, com foco em melhorias incrementais e correções contínuas.',
    image: logoAcessoCidadao,
  },
  {
    id: 'project-5',
    title: 'ObservAÍ',
    description:
      'Desenvolvido pela SEPLAG (Secretaria de Planejamento e Gestão), o  ObservAÍ reúne todas as informações importantes sobre saúde, educação, segurança e meio ambiente em um só lugar. Com a ajuda da Inteligência Artificial do Ceará, o CE.IA., os dados são transformados em informações fáceis de entender, possibilitando o acompanhamento de perto do que acontece no Ceará e ainda auxiliar o governo do Ceará a tomar decisões mais precisas e eficazes, usando dados reais e análises inteligentes. Isso significa mais investimentos nas áreas que mais precisam, menos burocracia e serviços públicos de melhor qualidade para o cidadão.',
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
    myContributions:
      'Responsável pelo desenvolvimento do frontend da aplicação, incluindo a criação de interfaces responsivas, integração com APIs, desenvolvimento de painéis administrativos e outras demandas relacionadas à camada de apresentação. Também participei ativamente na definição de tecnologias e decisões técnicas voltadas ao front-end.',
    image: logoObservai,
  },
  {
    id: 'project-6',
    title: 'Ceará Lid',
    description:
      'Desenvolvido pela SEPLAG (Secretaria de Planejamento e Gestão), o CearáLid é um sistema que reúne informações sobre vagas de emprego no governo estadual e ajuda os órgãos públicos a identificar os candidatos ideais para preencher essas posições. Ele funciona como uma plataforma de gestão de talentos, otimizando o processo de recrutamento e seleção.',
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
    myContributions:
      'Responsável pelo desenvolvimento do frontend da aplicação, incluindo a criação de interfaces responsivas, integração com APIs, desenvolvimento de painéis administrativos e outras demandas relacionadas à camada de apresentação. Também participei ativamente na definição de tecnologias e decisões técnicas voltadas ao front-end.',
    image: logoCearaLid,
  },
  {
    id: 'project-7',
    title: 'SUITE',
    description:
      'Desenvolvido pela SEPLAG (Secretaria de Planejamento e Gestão), o SUITE tem como objetivo modernizar e unificar a tramitação de processos administrativos no âmbito do Poder Executivo Estadual, substituindo os processos físicos por uma solução 100% digital',
    url: 'https://suite.ce.gov.br/',
    badges: [
      { name: 'Vue', color: 'green' },
      { name: 'TypeScript', color: 'purple' },
      { name: 'SASS', color: 'pink' },
      { name: 'Buefy', color: 'blue' },
      { name: 'Jest', color: 'yellow' },
      { name: 'Cypress', color: 'orange' },
    ],
    myContributions:
      'Responsável pela manutenção, com foco em melhorias incrementais e correções contínuas',
    image: logoSuite,
  },
  {
    id: 'project-8',
    title: 'Facilita+',
    description:
      'MVP da startup Facilita+, que foi criada para promover o fluxo de mercado de trabalho de forma fácil e eficiente, com uma plataforma que conecta empresas e profissionais de forma rápida e prática, facilitando a busca por oportunidades de trabalho e a contratação de talentos.',
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
    myContributions:
      'Responsável pela criação do MVP da plataforma, atuando desde a prototipação até o desenvolvimento do frontend e o deployment da aplicação. O projeto foi conduzido em um curto prazo, com foco na entrega ágil e eficiente de uma solução funcional.',
    image: logoFacilitaMais,
  },
];
