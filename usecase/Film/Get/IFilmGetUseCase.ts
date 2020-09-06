import { Films } from '@/domain/Film'

export interface IFilmGetUseCase {
  handle(): Promise<Films>
}
