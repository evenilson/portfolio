import { useEffect, useState } from "react";

interface UseThemeProvider {
  colorTheme: 'light' | 'dark'
  setTheme: (state: 'light' | 'dark') => void
}

export function useTheme(): UseThemeProvider {
  const [theme, setTheme] = useState<'dark' | 'light'>(localStorage['@theme-portfolio'])

  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === 'dark' || (!('@theme-portfolio' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('@theme-portfolio', theme)
  }, [theme, colorTheme]);

  return { colorTheme, setTheme }
}