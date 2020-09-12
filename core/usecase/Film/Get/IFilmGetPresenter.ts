import { Films } from '~/core/domain/Film'

export interface IFilmGetPresenter {
  sortByEpisodeId(): Films
}
