import { useEffect, useState } from 'react'

interface UseThemeProvider {
  colorTheme: 'light' | 'dark'
  setTheme: (state: 'light' | 'dark') => void
}

export function useTheme(): UseThemeProvider {
  const getInitialTheme = (): 'light' | 'dark' => {
    const storedTheme = localStorage.getItem('@theme-portfolio')
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme:dark)').matches

    return prefersDark ? 'dark' : 'light'
  }

  const [theme, setTheme] = useState<'dark' | 'light'>(() => getInitialTheme())

  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement

    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('@theme-portfolio', theme)
  }, [theme])

  return { colorTheme, setTheme }
}
