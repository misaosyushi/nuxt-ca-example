import { Films } from '@/core/domain/domain/Film'

export interface IFilmGetUseCase {
  handle(): Promise<Films>
}
