import { EpisodeId, OpeningCrawl, Title } from '@/core/domain/domain/Film'

export type FilmListOutputData = {
  result: FilmOutputData[]
}

export type FilmOutputData = {
  episodeId: EpisodeId
  title: Title
  openingCrawl: OpeningCrawl
  isFavorite: boolean
}
