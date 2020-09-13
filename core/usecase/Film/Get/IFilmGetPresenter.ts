import { Film, Films } from '@/core/domain/domain/Film'

export interface IFilmGetPresenter {
  sortByEpisodeId(results: Film[]): Films
}
