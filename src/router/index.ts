import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  routes
})

export default router
