import { CONTENT } from '../constants/projects'

export type Project = {
  id: string
  title: string
  team?: string
  advisor?: string
  coAdvisor?: string
  role?: string
  dates?: string
  description?: string
  externalLink?: string
  defaultImg: string
  extraMedia?: Media[]
}

export type Media = {
  type: MediaType
  url: string
}

export type MediaType = 'video' | 'image'

export function getProjectById(id: string) {
  const result = CONTENT.filter((project) => {
    return project.id === id
  })

  if (result.length === 0) {
    return null
  }

  return result[0]
}
