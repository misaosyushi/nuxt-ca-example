<template>
  <v-card>
    <v-card-title class="headline"> Star Wars films </v-card-title>
    <v-card-text>
      <v-list three-line>
        <v-list-item-group v-model="selected" multiple active-class="pink--text">
          <template v-for="(item, index) in films">
            <v-list-item :key="item.title">
              <template v-slot:default="{ active }">
                <v-list-item-content>
                  <v-list-item-title>{{ item.title + '&nbsp;&nbsp;' + item.releaseDate }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.openingCrawl }}</v-list-item-subtitle>
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
import { defineComponent, SetupContext, watchEffect, ref } from '@vue/composition-api'
import { FilmListViewModel } from '@/core/presenter/Film'

export default defineComponent({
  setup(_, context: SetupContext) {
    const films = ref<FilmListViewModel[]>([])
    const selected = ref<number[]>([])

    const presenter = context.root.$filmListPresenter()

    watchEffect(async () => {
      const res: FilmListViewModel[] = await presenter.execute()
      films.value = presenter.sortByEpisodeId(res)
    })

    return {
      films,
      selected,
    }
  },
})
</script>
