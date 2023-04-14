import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../hooks/useTheme";

export function ThemeSwitcher(){

  const {colorTheme, setTheme} = useTheme()

  const toogleTheme = () => {
    setTheme(colorTheme)
  }

  return (
    <DarkModeSwitch 
      checked={colorTheme === 'light'}
      onChange={toogleTheme}
      size={30}
    />
  )
}