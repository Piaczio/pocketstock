import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import Axios from 'axios';
import VueAxios from "vue-axios";
import Vuelidate from 'vuelidate';
import Vuex from 'vuex';
import store from '@/store';
import 'bulma/css/bulma.css';
Vue.use(Vuelidate)
Vue.use(VueAxios, Axios)
Vue.use(Vuex)
Vue.use(store)
Vue.config.productionTip = false

window.Axios = require('axios')

Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;
new Vue({
  vuetify,
  router,
  Vuex,
  VueAxios, Axios, Vuelidate, store,
  render: h => h(App),

}).$mount('#app')

