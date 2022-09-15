<template>
  <div>{{stocks[0]}}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { useStockStore } from '@/pinia'
import { mapState } from 'pinia'

const store = useStockStore()

@Component({
  computed: {
    ...mapState(useStockStore, ['stocks'])
  }
})
export default class PiniaStock extends Vue {
  async created () {
    await store.getStocks()
  }
}
</script>
