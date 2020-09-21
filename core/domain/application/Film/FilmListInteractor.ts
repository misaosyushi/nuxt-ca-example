import { IFilmListUseCase } from '@/core/interface/usecase/Film'
import { Films } from '@/core/domain/domain/Film'
import { IFilmRepository } from '@/core/interface/repository/Film'

export class FilmListInteractor implements IFilmListUseCase {
  private readonly repository: IFilmRepository

  constructor(repository: IFilmRepository) {
    this.repository = repository
  }

  handle(): Promise<Films> {
    return this.repository.getAll()
  }
}
