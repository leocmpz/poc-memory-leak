<template>
  <div>{{stocks[0]}}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class VuexStock extends Vue {
  async created () {
    await this.$store.dispatch('stock/getStocks')
  }

  get stocks () {
    return this.$store.state.stock.stocks
  }
}
</script>
