import { FilmListViewModel } from '@/core/presenter/Film'

export interface IFilmListPresenter {
  execute(): Promise<FilmListViewModel[]>
  sortByEpisodeId(films: FilmListViewModel[]): FilmListViewModel[]
}
