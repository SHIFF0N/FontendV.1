import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'


import pathify from 'vuex-pathify'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'


Vue.use(Vuex)
Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')


