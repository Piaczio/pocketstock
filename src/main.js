import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import axios from 'axios';
import VueAxios from "vue-axios";
import Vuelidate from 'vuelidate';
import Vuex from 'vuex';
import store from 'store';
import 'bulma/css/bulma.css';
Vue.use(Vuelidate)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(store)
Vue.config.productionTip = false

window.axios = require('axios')


new Vue({
  vuetify,
  router,
  Vuex,
  VueAxios, axios, Vuelidate, store,
  render: h => h(App),

}).$mount('#app')

