import { episodeId, title, openingCrawl } from '@/core/domain/domain/Film/vo'

export class Film {
  readonly episodeId: episodeId
  readonly title: title
  readonly openingCrawl: openingCrawl

  constructor(episodeId: episodeId, title: title, openingCrawl: openingCrawl) {
    this.episodeId = episodeId
    this.title = title
    this.openingCrawl = openingCrawl
  }
}
