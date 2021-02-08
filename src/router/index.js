import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios'
import VueAxios from "vue-axios";
Vue.use(VueRouter, axios, VueAxios)
window.axios = require('axios')
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
    path: '/userslist',
    name: 'userslist',
    component: () => import('../components/userslist.vue')
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
    path: '/general_articulos',
    name: 'general_articulos',
    component: () => import('../components/general_articulos.vue')
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
