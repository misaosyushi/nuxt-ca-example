import { Film } from '@/core/domain/domain/Film'

export interface IFilmListPresenter {
  sortByEpisodeId(films: Film[]): Film[]
}
