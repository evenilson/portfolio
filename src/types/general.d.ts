import { ColorBadgeKeys } from './colors'

export interface ProjectInterface {
  id: string
  title: string
  description: string
  image: string
  url: string
  myContributions: string
  badges: {
    name: string
    color: ColorBadgeKeys
  }[]
}

export interface DevToPostInterface {
  type_of: string
  id: number
  title: string
  description: string
  readable_publish_date: string
  slug: string
  path: string
  url: string
  comments_count: number
  public_reactions_count: number
  collection_id: string
  published_timestamp: string
  language: string
  subforem_id: number
  positive_reactions_count: number
  cover_image: string
  social_image: string
  canonical_url: string
  created_at: string
  edited_at: string
  crossposted_at: string
  published_at: string
  last_comment_at: string
  reading_time_minutes: number
  tag_list: string[]
  tags: string
  user: {
    name: string
    username: string
    twitter_username: string
    github_username: string
    user_id: number
    website_url: string
    profile_image: string
    profile_image_90: string
  }
}

export interface GetDevToPostsResponse {
  id: number
  title: string
  description: string
  url: string
  publishedAt: string
  tags: string[]
  readingTime: number
}
