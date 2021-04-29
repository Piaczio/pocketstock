// src/store.js (Vue CLI 1.x & 2.x) oder src/store/index.js (Vue CLI 3.x or newer)

import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const getDefaultState = () => {
 return {
  token: null,
 };
};

export default new Vuex.Store({
 strict: false,
 plugins: [createPersistedState()],
 state: getDefaultState(),
 getters: {
  isLoggedIn: state => {
   return state.token;
  },

 },
 mutations: {
  SET_TOKEN: (state, token) => {
   state.token = token;
  },

  RESET: state => {
   Object.assign(state, getDefaultState());
  }
 },
 actions: {
  login: ({ commit, dispatch }, { token }) => {

   commit('SET_TOKEN', token);
   dispatch;
   // set auth header
   Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  logout: ({ commit }) => {
   commit('RESET', '');
  }
 }
});