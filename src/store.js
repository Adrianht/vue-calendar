import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    months: [],
    chosenYear: 0,
    years: [],
    step: 1,
    monthCheckboxes: [],
    stepDisabled: true,
    bolk_1_date: "",
    bolk_2_date: "",
    bolk_3_date: ""
  },
  getters: {
    months: state => state.months,
    chosenYear: state => state.chosenYear,
    step: state => state.step,
    monthCheckboxes: state => state.monthCheckboxes,
    stepDisabled: state => state.stepDisabled,
    years: state => state.years,
    bolk_1_date: state => state.bolk_1_date,
    bolk_2_date: state => state.bolk_2_date,
    bolk_3_date: state => state.bolk_3_date
  },
  mutations: {
    SET_MONTHS(state, payload) {
      state.months = payload;
    },
    SET_CHOSEN_YEAR(state, payload) {
      state.chosenYear = payload;
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
    },
    SET_YEARS: (state, payload) => {
      state.years = payload;
    },
    SET_BOLK_1_DATE: (state, payload) => {
      state.bolk_1_date = payload;
    },
    SET_BOLK_2_DATE: (state, payload) => {
      state.bolk_2_date = payload;
    },
    SET_BOLK_3_DATE: (state, payload) => {
      state.bolk_3_date = payload;
    }
  },
  actions: {
    SET_MONTHS: (context, payload) => {
      context.commit("SET_MONTHS", payload);
    },
    SET_CHOSEN_YEAR: (context, payload) => {
      context.commit("SET_CHOSEN_YEAR", payload);
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
      context.commit("SET_STEP_DISABLED", payload);
    },
    SET_YEARS: (context, payload) => {
      context.commit("SET_YEARS", payload);
    },
    SET_BOLK_1_DATE: (context, payload) => {
      context.commit("SET_BOLK_1_DATE", payload);
    },
    SET_BOLK_2_DATE: (context, payload) => {
      context.commit("SET_BOLK_2_DATE", payload);
    },
    SET_BOLK_3_DATE: (context, payload) => {
      context.commit("SET_BOLK_3_DATE", payload);
    }
  }
});
