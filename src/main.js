import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './assets/js/router.js'
Vue.use(VueRouter)

import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css'
Vue.use(Mint);

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
