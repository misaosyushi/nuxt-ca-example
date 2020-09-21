import { Plugin } from '@nuxt/types'
import { AxiosFilmRepository } from '@/core/infrastructure/axios/Film'
import { FilmListInteractor } from '@/core/domain/application/Film'
import { FilmListPresenter } from '@/core/presenter/Film'

declare module '@nuxt/types' {
  interface Context {
    $filmListPresenter(): FilmListPresenter
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $filmListPresenter(): FilmListPresenter
  }
}

const myPlugin: Plugin = (context, inject) => {
  // Nuxtのcontextへのインジェクト
  context.$filmListPresenter = () => new FilmListPresenter(new FilmListInteractor(new AxiosFilmRepository()))

  // Vueインスタンスへのインジェクト
  inject('filmListPresenter', () => new FilmListPresenter(new FilmListInteractor(new AxiosFilmRepository())))
}

export default myPlugin
