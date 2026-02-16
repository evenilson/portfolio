import { BookIcon, CalendarDotIcon } from '@phosphor-icons/react'

import { useI18n } from '@/i18n'
import { GetDevToPostsResponse } from '@/types/general'

import { Badge, Heading, Text } from './ui'

type ArticleCardProps = {
  article: GetDevToPostsResponse
}

export function ArticleCard({ article }: ArticleCardProps) {
  const { locale, messages } = useI18n()
  const { title, description, url, publishedAt, tags, readingTime } = article

  const publishedAtDate = new Intl.DateTimeFormat(locale).format(new Date(publishedAt))

  return (
    <article className="p-4 border border-blue-600/20 dark:border-blue-600/10 rounded-br-2xl rounded-tl-2xl shadow-sm hover:shadow-md transition-shadow w-full">
      <Heading className="text-xl font-semibold mb-2">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {title}
        </a>
      </Heading>
      <div className="flex flex-col mt-4 gap-1">
        <Text className="font-extrabold">{messages.articleCard.descriptionTitle}</Text>
        <Text className="block font-thin">{description}</Text>
      </div>
      <div className="flex flex-col mt-4 gap-1">
        <Text className="font-extrabold">{messages.articleCard.tagsTitle}</Text>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} color="blue">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <CalendarDotIcon size={16} className="inline mr-1" />
          <Text size="sm">
            {messages.articleCard.publishedAt} {publishedAtDate}
          </Text>
        </div>
        <div>
          <BookIcon size={16} className="inline mr-1" />
          <Text size="sm">
            {messages.articleCard.readingTime} {readingTime} {messages.articleCard.minutes}
          </Text>
        </div>
      </div>
    </article>
  )
}
