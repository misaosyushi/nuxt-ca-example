import { Films } from '@/domain/Film/Films'

export interface IFilmRepository {
  getAll(): Promise<Films>
}
