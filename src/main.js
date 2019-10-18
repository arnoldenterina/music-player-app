import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import BackToTop from 'vue-backtotop'
import VueYoutube from 'vue-youtube'
import axios from 'axios'
import Toasted from 'vue-toasted'
import CripVueLoading from "crip-vue-loading"

window.Axios = axios

Vue.use(CripVueLoading, { axios:Axios, color: "rgb(143, 255, 199)", height: "5px", failColor: "red" })

Vue.use(Toasted)

Vue.use(VueYoutube)

Vue.use(BackToTop)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
