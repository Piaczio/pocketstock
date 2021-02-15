import Vue from 'vue'
import VueRouter from 'vue-router'


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
    /*beforeEnter: (_to, _from, next) => {
      console.log("<h1>store data :</h1>", this.$store.state.authenticated)
      if (this.$store.state.authenticated == false) {

        next("/login");
      }
      else {
        next("/home");
      }
    }*/
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