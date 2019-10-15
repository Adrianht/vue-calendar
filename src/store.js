import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    months: []
  },
  getters: {
    months: state => state.months
  },
  mutations: {
    SET_MONTHS(state, payload) {
      state.months = payload;
    }
  },
  actions: {
    SET_MONTHS: (context, payload) => {
      context.commit("SET_MONTHS", payload);
    }
  }
});
