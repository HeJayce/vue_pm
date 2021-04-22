import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/styles/global.css'
import myCharts from './components/result_analysis/myCharts.js'
// import city from './components/result_analysis/city.js'
import axios from 'axios'
axios.defaults.baseURL = 'http://8.129.117.120:8090/'
Vue.prototype.$http = axios
Vue.use(myCharts)
// Vue.use(city)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
