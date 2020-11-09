import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/crearusuario',
    name: 'crearusuario',
    component: () => import('../components/crearusuario.vue')
  },
  {
    path: '/creararticulos',
    name: 'creararticulos',
    component: () => import('../components/creararticulos.vue')
  },
  {
    path: '/electriclist',
    name: 'electriclist',
    component: () => import('../components/electriclist.vue')
  },
  {
    path: '/plomerialist',
    name: 'plomerialist',
    component: () => import('../components/plomerialist.vue')
  },
  {
    path: '/ac',
    name: 'ac',
    component: () => import('../components/ac.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
