import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import vuetify from './plugins/vuetify'
import { createPinia, PiniaVuePlugin } from 'pinia'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)

const pinia = createPinia()

new Vue({
  router,
  store,
  vuetify,
  pinia,
  render: h => h(App)
}).$mount('#app')
