import { Films } from '@/core/domain/domain/Film'

export interface IFilmGetPresenter {
  sortByEpisodeId(): Films
}
