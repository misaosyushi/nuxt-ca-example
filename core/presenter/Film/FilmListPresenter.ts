import { IFilmListPresenter } from '@/core/usecase/Film/List'
import { Film } from '@/core/domain/domain/Film'

export class FilmListPresenter implements IFilmListPresenter {
  sortByEpisodeId(films: Film[]): Film[] {
    return films.sort((a, b) => {
      if (a.episodeId < b.episodeId) return -1
      if (a.episodeId > b.episodeId) return 1
      return 0
    })
  }
}
