import { useTypeWriter } from '@/hooks'
import { useI18n } from '@/i18n'

export function TypeWriter() {
  const { messages } = useI18n()

  const displayed = useTypeWriter({
    texts: messages.typewriter,
    writeSpeed: 50,
    loop: true,
  })

  return (
    <>
      <span className="text-4xl sm:text-6xl">{displayed}</span>
      {
        <div className="max-h-full h-8 sm:h-14 w-1 ml-4 bg-blue-800 dark:bg-blue-400 inline-block animate-pulseFull"></div>
      }
    </>
  )
}
