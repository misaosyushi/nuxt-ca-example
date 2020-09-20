import { IFilmListOutputBoundary } from '@/core/usecase/Film/List'
import { Film } from '@/core/domain/domain/Film'
import { FilmListViewModel } from './FilmListViewModel'

export class FilmListPresenter implements IFilmListOutputBoundary {
  toViewModel(films: Film[]): FilmListViewModel[] {
    return films.map((film: Film) => {
      return {
        episodeId: Number(film.episodeId),
        title: String(film.title),
        openingCrawl: String(film.openingCrawl),
        releaseDate: String(film.releaseDate).replace(/-/g, '/'),
      }
    })
  }

  sortByEpisodeId(films: FilmListViewModel[]): FilmListViewModel[] {
    return films.sort((a, b) => {
      if (a.episodeId < b.episodeId) return -1
      if (a.episodeId > b.episodeId) return 1
      return 0
    })
  }
}
