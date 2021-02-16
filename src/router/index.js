import Vue from 'vue'
import VueRouter from 'vue-router'

import * as main from "@/main.js";
Vue.use(main);
Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect: {
      name: 'login',
      component: () => import('../components/global/login.vue'),
      meta: {
        layout: 'auth',
        name: 'auth'
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/global/login.vue'),

    meta: {
      layout: 'auth',
      name: 'auth'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    /*beforeEnter: () => {
      if (main.store.state.authenticated == false) {
        console.log("store data en la que NO te validaron :", main.store.state.authenticated)
        router.push({ path: '/login' });
      }
      else if (main.store.state.authenticated == true) {
        console.log("store data en la que si te validaron :", main.store.state.authenticated)
        router.push({
          path: '/home'
        });
      }
    },*/

  },
  {
    path: '*',
    name: 'Error',
    component: () => import('@/layouts/error.vue'),
    meta: {
      layout: 'error' // name of the layout
    }
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
    path: '/general_articulos',
    name: 'general_articulos',
    component: () => import('../components/table-lists/general_articulos.vue')
  },

]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
export default router