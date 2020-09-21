import { IFilmListPresenter } from '@/core/interface/presenter/Film'
import { Film } from '@/core/domain/domain/Film'
import { FilmListInteractor } from '@/core/usecase/Film/List'
import { FilmListViewModel } from './FilmListViewModel'

export class FilmListPresenter implements IFilmListPresenter {
  private readonly interactor: FilmListInteractor

  constructor(interactor: FilmListInteractor) {
    this.interactor = interactor
  }

  async execute(): Promise<FilmListViewModel[]> {
    const res = await this.interactor.handle()
    return res.results.map((film: Film) => {
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
