<template>
  <div>{{ stocks[0] }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { HttpService } from '@/services/HttpService'
import { Stock } from '@/models/Stock'

@Component({})
export default class StockComponent extends Vue {
  stocks: Stock[] = []

  async created () {
    this.stocks = (await HttpService.get('/v1/stocks')).data
  }
}
</script>
