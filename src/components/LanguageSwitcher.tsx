import clsx from 'clsx'
import { Check, Translate } from 'phosphor-react'
import { useEffect, useMemo, useRef, useState } from 'react'

import { Text } from '@/components/ui'
import { AppLanguage, SUPPORTED_LANGUAGES, useI18n } from '@/i18n'

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { language, messages, setLanguage } = useI18n()

  const languageOptions = useMemo(() => {
    return SUPPORTED_LANGUAGES.map((option) => ({
      code: option,
      ...messages.languageSwitcher.options[option],
    }))
  }, [messages.languageSwitcher.options])

  const handleSelectLanguage = (selectedLanguage: AppLanguage) => {
    setLanguage(selectedLanguage)
    setOpen(false)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current) return

      const target = event.target as Node
      if (!containerRef.current.contains(target)) {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('mousedown', handlePointerDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('mousedown', handlePointerDown)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        className="hover:opacity-70 transition-opacity"
        onClick={() => setOpen((currentValue) => !currentValue)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls="language-menu"
        aria-label={messages.languageSwitcher.triggerAria}
      >
        <Translate size={24} />
      </button>
      {open && (
        <div
          id="language-menu"
          role="menu"
          className="absolute right-0 top-full mt-2 z-30 min-w-40 rounded-md border border-blue-600/20 dark:border-blue-600/10 shadow-lg bg-white-400 text-black-800 dark:text-white-400 dark:bg-black-800 p-2"
        >
          {languageOptions.map(({ code, label, short }) => {
            const isSelected = language === code

            return (
              <button
                key={code}
                type="button"
                role="menuitemradio"
                aria-checked={isSelected}
                className={clsx(
                  'w-full flex items-center justify-between rounded px-3 py-2 text-sm transition-colors',
                  'hover:bg-blue-100 dark:hover:bg-black-700',
                  isSelected && 'text-blue-800 dark:text-blue-400'
                )}
                onClick={() => handleSelectLanguage(code)}
              >
                <Text>{label}</Text>
                <div className="flex items-center gap-2">
                  <Text className="uppercase">{short}</Text>
                  <Check
                    size={16}
                    className={clsx('transition-opacity', isSelected ? 'opacity-100' : 'opacity-0')}
                  />
                </div>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
