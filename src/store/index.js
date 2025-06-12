import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchId: null
  },
  mutations: {
    setSearchId(state, payload) {
      state.searchId = payload;
    }
  },
  actions: {
    updateSearchId({ commit }, newSearchId) {
      commit('setSearchId', newSearchId);
    }
  },
  getters: {
    getSearchId(state) {
      return state.searchId;
    }
  }
});