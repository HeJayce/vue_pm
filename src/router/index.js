/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/Home.vue'
import data_analysis_1 from '@/components/data_analysis/data_analysis_1.vue'
import data_analysis_2 from '@/components/data_analysis/data_analysis_2.vue'
import resultAnalysis from '@/components/result_analysis/resultAnalysis.vue'
import test from '@/components/result_analysis/displaylstm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/home',
    component: home,
    children: [
      { path: '/data_analysis_1', component: data_analysis_1 },
      { path: '/data_analysis_2', component: data_analysis_2 },
      { path: '/resultAnalysis', component: resultAnalysis },
      { path: '/test', component: test }
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
