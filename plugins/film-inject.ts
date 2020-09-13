import { Plugin } from '@nuxt/types'
import { AxiosFilmRepository } from '@/core/infrastructure/axios/Film'
import { FilmListInteractor } from '@/core/domain/application/Film'
import { FilmListPresenter } from '@/core/presenter/Film'

declare module '@nuxt/types' {
  interface Context {
    $filmListInteractor(): FilmListInteractor
    $filmListPresenter(): FilmListPresenter
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $filmListInteractor(): FilmListInteractor
    $filmListPresenter(): FilmListPresenter
  }
}

const myPlugin: Plugin = (context, inject) => {
  // Nuxtのcontextへのインジェクト
  context.$filmListInteractor = () => new FilmListInteractor(new AxiosFilmRepository())
  context.$filmListPresenter = () => new FilmListPresenter()

  // Vueインスタンスへのインジェクト
  inject('filmListInteractor', () => new FilmListInteractor(new AxiosFilmRepository()))
  inject('filmListPresenter', () => new FilmListPresenter())
}

export default myPlugin
