import { ColorBadgeKeys } from '@/types/colors'
import { colorBadgeClasses } from '@/utils/constants/general'

import { Text } from './Text'

interface BadgeProps {
  color: ColorBadgeKeys
  children: React.ReactNode
}

export function Badge({ color, children }: BadgeProps) {
  const classes = colorBadgeClasses[color as keyof typeof colorBadgeClasses]

  return (
    <div
      className={`flex items-center justify-center rounded-full px-3 py-0.5 w-fit border border-dashed ${classes.bg} ${classes.border}`}
    >
      <Text className={`text-xs font-bold ${classes.text}`}>{children}</Text>
    </div>
  )
}
