import { EpisodeId, Title, OpeningCrawl } from '@/core/domain/domain/Film/vo'

export class Film {
  readonly episodeId: EpisodeId
  readonly title: Title
  readonly openingCrawl: OpeningCrawl

  constructor(episodeId: EpisodeId, title: Title, openingCrawl: OpeningCrawl) {
    this.episodeId = episodeId
    this.title = title
    this.openingCrawl = openingCrawl
  }
}
