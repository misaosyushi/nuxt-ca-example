import { IFilmListPresenter } from '@/core/usecase/Film/List'
import { Film, Films } from '@/core/domain/domain/Film'

export class FilmListPresenter implements IFilmListPresenter {
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
