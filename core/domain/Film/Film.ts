import { EpisodeId, Title, OpeningCrawl, ReleaseDate } from './vo'

export class Film {
  readonly episodeId: EpisodeId
  readonly title: Title
  readonly openingCrawl: OpeningCrawl
  readonly releaseDate: ReleaseDate

  constructor(episodeId: EpisodeId, title: Title, openingCrawl: OpeningCrawl, releaseDate: ReleaseDate) {
    this.episodeId = episodeId
    this.title = title
    this.openingCrawl = openingCrawl
    this.releaseDate = releaseDate
  }
}
