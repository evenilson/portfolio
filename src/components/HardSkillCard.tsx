import { ScrollReveal, Stars } from './'

interface HardSkillCardProps {
  icon: JSX.Element
  stars: number
  name: string
  index: number
}

export function HardSkillCard({ icon, stars, name, index }: HardSkillCardProps) {
  return (
    <ScrollReveal key={name} index={index}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {icon}
          <p className="max-w-[12ch] sm:max-w-[20ch] lg:max-w-full truncate">{name}</p>
        </div>
        <div className="flex items-center gap-1">
          <Stars name={name} starsNumber={stars} />
        </div>
      </div>
    </ScrollReveal>
  )
}
