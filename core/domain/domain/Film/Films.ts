import { Film } from './Film'

export class Films {
  readonly results: Film[]

  constructor(results: Film[]) {
    this.results = results
  }
}
