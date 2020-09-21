import { Films } from '~/core/domain/domain/Film'

export interface IFilmListUseCase {
  handle(): Promise<Films>
}
