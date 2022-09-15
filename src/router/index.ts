import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/stock',
    name: 'Stock',
    component: () => import(/* webpackChunkName: "stock" */ '../components/Stock.vue')
  },
  {
    path: '/vuex-stock',
    name: 'VuexStock',
    component: () => import(/* webpackChunkName: "vuexStock" */ '../components/VuexStock.vue')
  },
  {
    path: '/pinia-stock',
    name: 'PiniaStock',
    component: () => import(/* webpackChunkName: "pinia-stock" */ '../components/PiniaStock.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
