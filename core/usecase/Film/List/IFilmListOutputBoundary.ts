import { Film } from '@/core/domain/domain/Film'
import { FilmListViewModel } from '@/core/presenter/Film/FilmListViewModel'

export interface IFilmListOutputBoundary {
  toViewModel(films: Film[]): FilmListViewModel[]
  sortByEpisodeId(films: FilmListViewModel[]): FilmListViewModel[]
}
