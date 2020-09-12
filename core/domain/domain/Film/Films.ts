import { Film } from './Film'

export class Films {
  readonly results: Film[]

  constructor(results: Film[]) {
    this.results = results
  }

  sortByEpisodeId(): Films {
    return new Films(
      this.results.sort((a, b) => {
        if (a.episodeId < b.episodeId) return -1
        if (a.episodeId > b.episodeId) return 1
        return 0
      })
    )
  }
}
