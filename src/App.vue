<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-btn class="mr-2" @click="currentPage = 1">Normal</v-btn>
    <v-btn class="mr-2" @click="currentPage = 2">Vuex</v-btn>
    <v-btn class="mr-2" @click="currentPage = 3">Pinia</v-btn>
    <v-btn class="mr-2" @click="$router.push({ path: '/' })">Home</v-btn>
    </v-app-bar>

    <v-main>
      <div class="d-flex align-center justify-center flex-column text-h1 font-weight-bold" style="height: 100vh">
        {{heap}} MB
      </div>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
  heap = ''
  currentPage = 0
  pages = {
    0: '/',
    1: '/stock',
    2: '/vuex-stock',
    3: '/pinia-stock'
  } as any

  count = 0

  created () {
    setInterval(() => {
      this.heap = ((window.performance as any).memory.usedJSHeapSize / Math.pow(1000, 2)).toFixed(2).replace('.', ',')
      const pageNumber = (this.count % 2 === 0) ? 0 : this.currentPage
      this.goTo(this.pages[pageNumber])
      this.count++
    }, 200)
  }

  goTo (path: string) {
    this.$router.push({ path })
  }
}
</script>
