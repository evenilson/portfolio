import { BehanceLogo, CodepenLogo, DribbbleLogo, GithubLogo, LinkedinLogo } from 'phosphor-react';
import { Tooltip } from '@/components/ui';

const SOCIAL_MEDIA_LIST = Object.freeze([
  {
    socialMedia: 'Linkedin',
    logo: <LinkedinLogo size={25} className="dark:text-blue-400 text-blue-800" />,
    href: 'https://www.linkedin.com/in/evenilsonliandro/',
  },
  {
    socialMedia: 'CodePen',
    logo: <CodepenLogo size={25} className="dark:text-blue-400 text-blue-800" />,
    href: 'https://codepen.io/evenilsonliandro',
  },
  {
    socialMedia: 'GitHub',
    logo: <GithubLogo size={25} className="dark:text-blue-400 text-blue-800" />,
    href: 'https://github.com/evenilson',
  },
  {
    socialMedia: 'Behance',
    logo: <BehanceLogo size={25} className="dark:text-blue-400 text-blue-800" />,
    href: '#',
  },
  {
    socialMedia: 'Dribbble',
    logo: <DribbbleLogo size={25} className="dark:text-blue-400 text-blue-800" />,
    href: '#',
  },
]);

export function SocialMediasArea() {
  return (
    <div
      className="
      fixed left-8 bottom-6 hidden md:flex gap-5 dark:bg-black-400 bg-blue-100 py-2 px-3 rounded-full animated z-[99]"
    >
      {SOCIAL_MEDIA_LIST.map(({ socialMedia, logo, href }) => {
        return (
          <Tooltip key={socialMedia} tooltip={socialMedia}>
            <a
              href={href}
              target="_blank"
              aria-label={`${socialMedia} Logo`}
              className="rounded-full w-10 h-10 border-2 dark:border-blue-400 border-blue-800 flex justify-center items-center 
                 hover:opacity-90 hover:scale-90 transition-scale "
            >
              {logo}
            </a>
          </Tooltip>
        );
      })}
    </div>
  );
}
