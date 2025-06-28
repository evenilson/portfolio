import { DarkModeSwitch } from 'react-toggle-dark-mode'

import { useTheme } from '@/hooks'

export function ThemeSwitcher() {
  const { colorTheme, setTheme } = useTheme()

  const toogleTheme = () => {
    setTheme(colorTheme)
  }

  return (
    <div>
      <DarkModeSwitch
        className="hover:opacity-70 transition-opacity"
        checked={colorTheme === 'light'}
        onChange={toogleTheme}
        size={24}
      />
    </div>
  )
}
