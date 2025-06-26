import {
  DevToLogoIcon,
  LinkedinLogoIcon,
  GithubLogoIcon,
  DribbbleLogoIcon,
} from '@phosphor-icons/react';
import { Tooltip } from '@/components/ui';

const SOCIAL_MEDIA_LIST = Object.freeze([
  {
    socialMedia: 'Linkedin',
    logo: <LinkedinLogoIcon size={25} className="dark:text-orange-400 text-orange-800" />,
    href: 'https://www.linkedin.com/in/evenilsonliandro/',
  },
  {
    socialMedia: 'GitHub',
    logo: <GithubLogoIcon size={25} className="dark:text-orange-400 text-orange-800" />,
    href: 'https://github.com/evenilson',
  },
  {
    socialMedia: 'Dev.to',
    logo: <DevToLogoIcon size={25} className="dark:text-orange-400 text-orange-800" />,
    href: 'https://dev.to/evenilsonliandro',
  },
  {
    socialMedia: 'Dribbble',
    logo: <DribbbleLogoIcon size={25} className="dark:text-orange-400 text-orange-800" />,
    href: 'https://dribbble.com/evenilsonliandro',
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
              className="rounded-full w-10 h-10 border-2 dark:border-orange-400 border-orange-800 flex justify-center items-center 
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
