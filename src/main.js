import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import Axios from 'axios';
import VueAxios from "vue-axios";
import Vuelidate from 'vuelidate';
import Vuex from 'vuex';
import Echo from 'laravel-echo';
import store from '@/store';
import 'bulma/css/bulma.css';
Vue.use(Vuelidate)
Vue.use(VueAxios, Axios)
Vue.use(Vuex)
Vue.use(store)
Vue.config.productionTip = false

window.Axios = require('axios')


window.Pusher = require('pusher-js');


Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;



window.Echo = new Echo({
  broadcaster: 'pusher',
  key: 'local',
  wsHost: '127.0.0.1',
  wsPort: 6001,
  //cluster: process.env.MIX_PUSHER_APP_CLUSTER,
  forceTLS: false,
  disableStats: true,
  //encrypted: true,
});



new Vue({
  vuetify,
  router,
  Vuex,
  VueAxios, Axios, Vuelidate, store,
  render: h => h(App),

}).$mount('#app')
