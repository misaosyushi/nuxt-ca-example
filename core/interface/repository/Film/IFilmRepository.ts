import { Films } from '@/core/domain/Film'

export interface IFilmRepository {
  getAll(): Promise<Films>
}
