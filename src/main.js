import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://8.129.117.120:8090/'
Vue.prototype.$http = axios
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
