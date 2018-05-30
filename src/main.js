// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@@/reset.css'
import '@@/border.css'
import '@@/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios = axios;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
