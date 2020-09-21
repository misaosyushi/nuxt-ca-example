import { FilmListViewModel } from '@/core/presenter/Film/FilmListViewModel'

export interface IFilmListPresenter {
  execute(): Promise<FilmListViewModel[]>
  sortByEpisodeId(films: FilmListViewModel[]): FilmListViewModel[]
}
