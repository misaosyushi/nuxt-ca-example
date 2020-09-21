import { Films } from '../../../domain/domain/Film/Films'

export interface IFilmRepository {
  getAll(): Promise<Films>
}
