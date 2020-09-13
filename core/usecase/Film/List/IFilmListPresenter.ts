import { Film, Films } from '@/core/domain/domain/Film'

export interface IFilmListPresenter {
  sortByEpisodeId(results: Film[]): Films
}
