import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(VueResource)

import router from './js/roeuter.js'


new Vue({
  el: '#app',
  render: h => h(App),
  router
  
})
