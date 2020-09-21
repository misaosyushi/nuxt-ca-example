import { Films } from '@/core/domain/Film'

export interface IFilmListUseCase {
  handle(): Promise<Films>
}
