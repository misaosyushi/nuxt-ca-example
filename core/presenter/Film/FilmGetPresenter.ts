import { IFilmGetPresenter } from '@/core/usecase/Film/Get'
import { Film, Films } from '@/core/domain/domain/Film'

export class FilmGetPresenter implements IFilmGetPresenter {
  sortByEpisodeId(results: Film[]): Films {
    return new Films(
      results.sort((a, b) => {
        if (a.episodeId < b.episodeId) return -1
        if (a.episodeId > b.episodeId) return 1
        return 0
      })
    )
  }
}
