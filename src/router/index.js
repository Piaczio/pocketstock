import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store";
//import * as main from "@/main.js";
//import { nextTick } from 'vue/types/umd';
//Vue.use(main);
Vue.use(VueRouter)
Vue.use(store)


const routes = [
  {
    path: '/',
    redirect: {
      name: 'login',
      component: () => import(/*webpackChunkName: "Login" */'../components/global/login.vue'),
      meta: {
        layout: 'auth',
        name: 'auth'
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/*webpackChunkName: "Login" */'../components/global/login.vue'),

    meta: {
      layout: 'auth',
      name: 'auth'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/*webpackChunkName: "Home" */'../views/Home.vue'),
    meta: {
      authenticated: true
    },
    beforeEnter: (to, from, next) => {
      let validado = to.matched.some(record => record.meta.authenticated);
      if (validado == true && from.path !== '/') {
        if (store.email && store.password) {
          next();
          console.log("pasaste la validado con: ", store.email, " y ", store.password)
        }
      }
      else if (!validado) {
        next({ name: 'login' });
      }
      else {
        next({ name: 'login' });
      }

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
  //Cruds 
  {
    path: '/crearusuario',
    name: 'crearusuario',
    component: () => import('../components/cruds/crearusuario.vue')
  },
  {
    path: '/crearcategoria',
    name: 'crearcategoria',
    component: () => import('../components/cruds/crearcategoria.vue')
  },

  {
    path: '/crear',
    name: 'crear',
    component: () => import('../components/global/creacion.vue')
  },
  {
    path: '/crearmarca',
    name: 'crearmarca',
    component: () => import('../components/cruds/crearmarca.vue')
  },
  {
    path: '/crearstatus',
    name: 'crearstatus',
    component: () => import('../components/cruds/crearstatus.vue')
  },
  {
    path: '/crearubicacion',
    name: 'crearubicacion',
    component: () => import('../components/cruds/crearubicacion.vue')
  },
  {
    path: '/crearproveedor',
    name: 'crearproveedor',
    component: () => import('../components/cruds/crearproveedor.vue')
  },
  {
    path: '/creartipo',
    name: 'creartipo',
    component: () => import('../components/cruds/creartipo.vue')
  },
  //Listas
  {
    path: '/userslist',
    name: 'userslist',
    component: () => import('../components/table-lists/userslist.vue')
  },
  {
    path: '/general_articulos',
    name: 'general_articulos',
    component: () => import('../components/table-lists/general_articulos.vue')
  },
  {
    path: '/categoria_list',
    name: 'categoria_list',
    component: () => import('@/components/table-lists/categoria-list.vue')
  },
  {
    path: '/marca_list',
    name: 'marca_list',
    component: () => import('@/components/table-lists/marca-list.vue')
  },

]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})




export default router