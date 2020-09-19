import { FilmOutputData, IFilmListPresenter } from '@/core/usecase/Film/List'
import { Film } from '@/core/domain/domain/Film'

export class FilmListPresenter implements IFilmListPresenter {
  toOutputData(films: Film[]): FilmOutputData[] {
    return films.map((film: Film) => {
      return {
        episodeId: film.episodeId,
        title: film.title,
        openingCrawl: film.openingCrawl,
        isFavorite: false,
      }
    })
  }

  sortByEpisodeId(films: Film[]): Film[] {
    return films.sort((a, b) => {
      if (a.episodeId < b.episodeId) return -1
      if (a.episodeId > b.episodeId) return 1
      return 0
    })
  }
}
