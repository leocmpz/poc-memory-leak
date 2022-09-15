import { HttpService } from '@/services/HttpService'
import { defineStore } from 'pinia'

export const useStockStore = defineStore('stock', {
  state: () => { return { stocks: [] } },
  actions: {
    async getStocks () {
      try {
        const response = await HttpService.get('/v1/stocks')
        this.stocks = response.data
      } catch (errors: any) {
        throw errors.response.data
      }
    }
  }
})
