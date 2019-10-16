import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    months: [],
    year: 2019
  },
  getters: {
    months: state => state.months,
    year: state => state.year
  },
  mutations: {
    SET_MONTHS(state, payload) {
      state.months = payload;
    },
    SET_YEAR(state, payload) {
      state.year = payload;
    }
  },
  actions: {
    SET_MONTHS: (context, payload) => {
      context.commit("SET_MONTHS", payload);
    },
    SET_YEAR: (context, payload) => {
      context.commit("SET_YEAR", payload);
    }
  }
});
