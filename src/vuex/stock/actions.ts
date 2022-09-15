import { RootState } from '@/models/RootState'
import { StockState } from '@/models/StockState'
import { HttpService } from '@/services/HttpService'
import { ActionTree, Commit } from 'vuex'

export const actions: ActionTree<StockState, RootState> = {
  async getStocks ({ commit }: { commit: Commit }) {
    try {
      const response = await HttpService.get('/v1/stocks')
      const x = Object.assign(response)
      commit('setStocks', x.data)
      return x.data
    } catch (errors: any) {
      throw errors.response.data
    }
  }
}
