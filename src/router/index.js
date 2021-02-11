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
    path: '/login',
    name: 'login',
    component: () => import('../components/global/login.vue')
  },
  {
    path: '/sidebar',
    name: 'sidebar',
    component: () => import('../components/global/sidebar.vue')
  },
  {
    path: '/crearusuario',
    name: 'crearusuario',
    component: () => import('../components/cruds/crearusuario.vue')
  },
  {
    path: '/userslist',
    name: 'userslist',
    component: () => import('../components/table-lists/userslist.vue')
  },
  {
    path: '/creararticulos',
    name: 'creararticulos',
    component: () => import('../components/cruds/creararticulos.vue')
  },
  {
    path: '/electriclist',
    name: 'electriclist',
    component: () => import('../components/table-lists/electriclist.vue')
  },
  {
    path: '/general_articulos',
    name: 'general_articulos',
    component: () => import('../components/table-lists/general_articulos.vue')
  },
  {
    path: '/ac',
    name: 'ac',
    component: () => import('../components/table-lists/ac.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/table-lists/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
