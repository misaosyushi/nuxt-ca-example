import { IFilmListUseCase } from '@/core/usecase/Film/List'
import { Films, IFilmRepository } from '@/core/domain/domain/Film'

export class FilmListInteractor implements IFilmListUseCase {
  private readonly repository: IFilmRepository

  constructor(repository: IFilmRepository) {
    this.repository = repository
  }

  handle(): Promise<Films> {
    return this.repository.getAll()
  }
}
