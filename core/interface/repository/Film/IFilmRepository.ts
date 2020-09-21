import { Films } from '@/core/domain/Film/Films'

export interface IFilmRepository {
  getAll(): Promise<Films>
}
