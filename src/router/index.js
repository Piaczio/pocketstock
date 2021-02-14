import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/global/login.vue'),
    meta: {
      layout: 'auth'
    }
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('@/layouts/error.vue'),
    meta: {
      layout: 'error' // name of the layout
    }
  },
  /*{
    path: '/sidebar',
    name: 'sidebar',
    component: () => import('../components/global/sidebar.vue')
  },*/
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
    path: '/general_articulos',
    name: 'general_articulos',
    component: () => import('../components/table-lists/general_articulos.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
