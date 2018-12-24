import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    login(state) {
      state.isLogin = true;
    },
    unLogin(state) {
      state.isLogin = false;
    }
  }
});
export default store;
