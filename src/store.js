import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    months: [],
    year: 2019,
    step: 1,
    monthCheckboxes: [],
    stepDisabled: true
  },
  getters: {
    months: state => state.months,
    year: state => state.year,
    step: state => state.step,
    monthCheckboxes: state => state.monthCheckboxes,
    stepDisabled: state => state.stepDisabled
  },
  mutations: {
    SET_MONTHS(state, payload) {
      state.months = payload;
    },
    SET_YEAR(state, payload) {
      state.year = payload;
    },
    SET_STEP_INCREMENT(state) {
      state.step++;
    },
    SET_STEP_DECREMENT(state) {
      state.step--;
    },
    SET_MONTH_CHECKBOXES(state, payload) {
      state.monthCheckboxes = payload;
    },
    SET_STEP_DISABLED: (state, payload) => {
      state.stepDisabled = payload;
    }
  },
  actions: {
    SET_MONTHS: (context, payload) => {
      context.commit("SET_MONTHS", payload);
    },
    SET_YEAR: (context, payload) => {
      context.commit("SET_YEAR", payload);
    },
    SET_STEP_INCREMENT: context => {
      context.commit("SET_STEP_INCREMENT");
    },
    SET_STEP_DECREMENT: context => {
      context.commit("SET_STEP_DECREMENT");
    },
    SET_MONTH_CHECKBOXES: (context, payload) => {
      context.commit("SET_MONTH_CHECKBOXES", payload);
    },
    SET_STEP_DISABLED: (context, payload) => {
      context.commit('SET_STEP_DISABLED', payload)
    },
  }
});
