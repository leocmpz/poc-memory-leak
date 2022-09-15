import { StockState } from '@/models/StockState'
import { MutationTree } from 'vuex'

export const mutations: MutationTree<StockState> = {
  setStocks (state, payload) {
    state.stocks = payload
  }
}
