import { BehanceLogo, CodepenLogo, DribbbleLogo, GithubLogo, LinkedinLogo } from "phosphor-react";
import { Tooltip } from "./UI/Tooltip";

export function SocialMediasArea() {

  const socialMediasList = [
    {
      socialMedia: 'Linkedin',
      logo: <LinkedinLogo size={30} className="text-blue-400" />,
      href: 'https://www.linkedin.com/in/evenilsonliandro/'
    },
    {
      socialMedia: 'CodePen',
      logo: <CodepenLogo size={30} className="text-blue-400" />,
      href: 'https://codepen.io/evenilsonliandro'
    },
    {
      socialMedia: 'GitHub',
      logo: <GithubLogo size={30} className="text-blue-400" />,
      href: 'https://github.com/evenilson'
    },
    {
      socialMedia: 'Behance',
      logo: <BehanceLogo size={30} className="text-blue-400" />,
      href: '#'
    },
    {
      socialMedia: 'Dribbble',
      logo: <DribbbleLogo size={30} className="text-blue-400" />,
      href: '#'
    }
  ]

  return (
    <div className="
      fixed left-8 bottom-6 flex gap-8 bg-white-400 py-2 px-3 rounded-full shadow-lg
    dark:bg-black-400"
    >

      {
        socialMediasList.map(({ socialMedia, logo, href }) => {
          return (
            <Tooltip
              key={socialMedia}
              tooltip={socialMedia}
            >
              <a
                href={href}
                target="_blank"
                aria-label={`${socialMedia} Logo`}
                className="rounded-full w-12 h-12 border-2 border-blue-400 flex justify-center items-center transition-all
                hover:opacity-90 hover:scale-90"
              >
                {logo}
              </a>
            </Tooltip>
          )
        })
      }
    </div>
  )
}