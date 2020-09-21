import { Films } from '@/core/domain/domain/Film/Films'

export interface IFilmRepository {
  getAll(): Promise<Films>
}
