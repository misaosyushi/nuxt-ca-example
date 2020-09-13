import { IFilmGetPresenter } from '@/core/usecase/Film/Get'
import { Film, Films } from '@/core/domain/domain/Film'

export class FilmGetPresenter implements IFilmGetPresenter {
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
