import { episodeId, title } from '@/domain/Film/vo'

export class Film {
  readonly episodeId: episodeId
  readonly title: title

  constructor(episodeId: episodeId, title: title) {
    this.episodeId = episodeId
    this.title = title
  }
}
