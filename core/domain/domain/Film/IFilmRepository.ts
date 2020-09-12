import { Films } from './Films'

export interface IFilmRepository {
  getAll(): Promise<Films>
}
