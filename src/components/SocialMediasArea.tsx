import { BehanceLogo, CodepenLogo, DribbbleLogo, GithubLogo, LinkedinLogo } from "phosphor-react";
import { Tooltip } from "./UI/Tooltip";

export function SocialMediasArea() {

  const socialMediasList = [
    {
      socialMedia: 'Linkedin',
      logo: <LinkedinLogo size={25} className="dark:text-blue-400 text-blue-800" />,
      href: 'https://www.linkedin.com/in/evenilsonliandro/'
    },
    {
      socialMedia: 'CodePen',
      logo: <CodepenLogo size={25} className="dark:text-blue-400 text-blue-800" />,
      href: 'https://codepen.io/evenilsonliandro'
    },
    {
      socialMedia: 'GitHub',
      logo: <GithubLogo size={25} className="dark:text-blue-400 text-blue-800" />,
      href: 'https://github.com/evenilson'
    },
    {
      socialMedia: 'Behance',
      logo: <BehanceLogo size={25} className="dark:text-blue-400 text-blue-800" />,
      href: '#'
    },
    {
      socialMedia: 'Dribbble',
      logo: <DribbbleLogo size={25} className="dark:text-blue-400 text-blue-800" />,
      href: '#'
    }
  ]

  return (
    <div className="
      fixed left-8 bottom-6 flex flex-col md:flex-row gap-5 bg-[#0e2e34] py-2 px-3 rounded-full"
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
                className="rounded-full w-10 h-10 border-2 dark:border-blue-400 border-blue-800 flex justify-center items-center 
                 hover:opacity-90 hover:scale-90 transition-scale animated"
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