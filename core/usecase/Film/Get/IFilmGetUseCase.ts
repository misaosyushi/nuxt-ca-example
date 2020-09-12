import { Films } from '~/core/domain/Film'

export interface IFilmGetUseCase {
  handle(): Promise<Films>
}
