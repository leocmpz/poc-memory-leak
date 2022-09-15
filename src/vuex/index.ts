import { RootState } from '@/models/RootState'
import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { stock } from './stock'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    isVuex: false
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    stock
  }
}

export default new Vuex.Store<RootState>(store)
