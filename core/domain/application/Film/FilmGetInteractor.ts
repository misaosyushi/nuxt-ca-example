import { IFilmGetUseCase } from '@/core/usecase/Film/Get'
import { Films, IFilmRepository } from '@/core/domain/domain/Film'

export class FilmGetInteractor implements IFilmGetUseCase {
  private readonly repository: IFilmRepository

  constructor(repository: IFilmRepository) {
    this.repository = repository
  }

  handle(): Promise<Films> {
    return this.repository.getAll()
  }
}
