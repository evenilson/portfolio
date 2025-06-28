import { DevToPostInterface, GetDevToPostsResponse } from '@/types/general'

export async function GetDevToPosts(): Promise<GetDevToPostsResponse[]> {
  try {
    const response = await fetch('https://dev.to/api/articles?username=evenilsonliandro')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data.map((post: DevToPostInterface) => ({
      id: post.id,
      title: post.title,
      url: post.url,
      publishedAt: post.published_timestamp,
      tags: post.tag_list,
      description: post.description,
      readingTime: post.reading_time_minutes,
    }))
  } catch (error) {
    console.error('Error fetching Dev.to posts:', error)
    return []
  }
}
