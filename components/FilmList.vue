<template>
  <v-card width="800px">
    <v-card-title class="headline"> Star Wars films </v-card-title>
    <v-card-text>
      <v-list-item v-for="(film, i) in films" :key="i">
        <v-list-item-content>
          <v-list-item-title>{{ film.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, SetupContext, watchEffect, ref } from '@vue/composition-api'
import { Film, Films } from '@/core/domain/domain/Film'

export default defineComponent({
  setup(_, context: SetupContext) {
    const films = ref<Film[]>([])

    const interactor = context.root.$filmListInteractor()
    const presenter = context.root.$filmListPresenter()

    watchEffect(async () => {
      const res: Films = await interactor.handle()
      films.value = presenter.sortByEpisodeId(res.results)
    })

    return {
      films,
    }
  },
})
</script>
