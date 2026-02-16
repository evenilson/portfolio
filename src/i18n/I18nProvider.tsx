import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react'

import {
  AppLanguage,
  I18nMessages,
  LANGUAGE_LOCALES,
  MESSAGES,
  SUPPORTED_LANGUAGES,
} from './messages'

const STORAGE_KEY = 'portfolio-language'
const DEFAULT_LANGUAGE: AppLanguage = 'pt'

function isSupportedLanguage(value: string | null): value is AppLanguage {
  return value !== null && (SUPPORTED_LANGUAGES as readonly string[]).includes(value)
}

function detectInitialLanguage(): AppLanguage {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE

  const languageInStorage = window.localStorage.getItem(STORAGE_KEY)
  if (isSupportedLanguage(languageInStorage)) {
    return languageInStorage
  }

  const browserLanguage = window.navigator.language.toLowerCase()
  if (browserLanguage.startsWith('pt')) return 'pt'
  if (browserLanguage.startsWith('es')) return 'es'

  return 'en'
}

interface I18nContextProps {
  language: AppLanguage
  locale: string
  messages: I18nMessages
  setLanguage: (language: AppLanguage) => void
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined)

interface I18nProviderProps {
  children: ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguage] = useState<AppLanguage>(detectInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo<I18nContextProps>(() => {
    return {
      language,
      locale: LANGUAGE_LOCALES[language],
      messages: MESSAGES[language],
      setLanguage,
    }
  }, [language])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)

  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }

  return context
}
