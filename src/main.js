import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import axios from 'axios';
import VueAxios from "vue-axios";
import Vuelidate from 'vuelidate'
import Vuex from 'vuex';
import 'bulma/css/bulma.css';
Vue.use(Vuelidate)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.config.productionTip = false

window.axios = require('axios')
const store = new Vuex.Store(
  {
    state: {
      authenticated: false
    },
    mutations: {
      setAuthentication(state, status) {
        state.authenticated = status;
      }
    }
  }
)

new Vue({
  vuetify,
  router,
  Vuex,
  VueAxios, axios, Vuelidate,
  render: h => h(App),
  store: store
}).$mount('#app')
