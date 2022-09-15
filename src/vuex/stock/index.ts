import { RootState } from '@/models/RootState'
import { StockState } from '@/models/StockState'
import { Module } from 'vuex'
import { actions } from './actions'
import { mutations } from './mutations'
import { state } from './state'

export const stock: Module<StockState, RootState> = {
  state,
  actions,
  mutations,
  namespaced: true
}
