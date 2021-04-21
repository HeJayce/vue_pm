import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/Home.vue'
import data_analysis_1 from '../components/data_analysis/data_analysis_1.vue'
import data_analysis_2 from '../components/data_analysis/data_analysis_2.vue'
import result_analysis from '../components/result_analysis/resultAnalysis.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: home },
  {
    path: '/home',
    component: home,
    children: [
      { path: '/data_analysis_1', component: data_analysis_1 },
      { path: '/data_analysis_2', component: data_analysis_2 },
      { path: '/result_analysis', component: result_analysis }
    ]
  }
]

const router = new VueRouter({
  routes
})
// 防止路由重复报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
export default router
