import { Plugin } from '@nuxt/types'
import { AxiosFilmRepository } from '@/core/infrastructure/axios/Film'
import { FilmGetInteractor } from '@/core/domain/application/Film/FilmGetInteractor'
import { FilmGetPresenter } from '@/core/presenter/Film/FilmGetPresenter'

declare module '@nuxt/types' {
  interface Context {
    $filmGetInteractor(): FilmGetInteractor
    $filmGetPresenter(): FilmGetPresenter
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $filmGetInteractor(): FilmGetInteractor
    $filmGetPresenter(): FilmGetPresenter
  }
}

const myPlugin: Plugin = (context, inject) => {
  // Nuxtのcontextへのインジェクト
  context.$filmGetInteractor = () => new FilmGetInteractor(new AxiosFilmRepository())
  context.$filmGetPresenter = () => new FilmGetPresenter()

  // Vueインスタンスへのインジェクト
  inject('filmGetInteractor', () => new FilmGetInteractor(new AxiosFilmRepository()))
  inject('filmGetPresenter', () => new FilmGetPresenter())
}

export default myPlugin
