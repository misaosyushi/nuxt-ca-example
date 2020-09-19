import { Film } from '@/core/domain/domain/Film'
import { FilmOutputData } from '@/core/usecase/Film/List/FilmListOutputData'

export interface IFilmListPresenter {
  toOutputData(films: Film[]): FilmOutputData[]
  sortByEpisodeId(films: FilmOutputData[]): FilmOutputData[]
}
