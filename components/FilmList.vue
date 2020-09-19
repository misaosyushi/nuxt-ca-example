<template>
  <v-card>
    <v-card-title class="headline"> Star Wars films </v-card-title>
    <v-card-text>
      <v-list three-line>
        <v-list-item-group v-model="selected" multiple active-class="pink--text">
          <template v-for="(item, index) in films">
            <v-list-item :key="item.title" @click="favorite(item.episodeId)">
              <template v-slot:default="{ active }">
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                  <v-list-item-subtitle v-text="item.openingCrawl"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-icon v-if="!active" color="grey lighten-1"> mdi-star-outline </v-icon>
                  <v-icon v-else color="yellow"> mdi-star </v-icon>
                </v-list-item-action>
              </template>
            </v-list-item>

            <v-divider v-if="index + 1 < films.length" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, SetupContext, watchEffect, ref, reactive } from '@vue/composition-api'
import { Film, Films } from '@/core/domain/domain/Film'

export default defineComponent({
  setup(_, context: SetupContext) {
    const films = ref<Film[]>([])
    const selected = reactive<number[]>([])

    const interactor = context.root.$filmListInteractor()
    const presenter = context.root.$filmListPresenter()

    watchEffect(async () => {
      const res: Films = await interactor.handle()
      films.value = presenter.sortByEpisodeId(res.results)
    })

    function favorite(episodeId: number) {
      console.log('hoge', episodeId)
    }

    return {
      films,
      selected,
      favorite,
    }
  },
})
</script>
