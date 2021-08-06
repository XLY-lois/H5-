import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SearchPage from '../views/searchPage/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/searchPage',
    name: 'SearchPage',
    component: SearchPage
  }
]

const router = new VueRouter({
  routes
})

export default router
