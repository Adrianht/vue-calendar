<template>
  <div>
    <RadioButtons :wantedRadio="years" @click="updateYear" />
    <NavButtons @clickNext="initMonths" />
  </div>
</template>

<script>
import RadioButtons from "@/components/RadioButtons.vue";
import NavButtons from "@/components/shared/NavButtons.vue";

export default {
  components: {
    RadioButtons,
    NavButtons
  },
  props: {
    years: Array
  },
  data() {
    return {
      localYears: [],
      months: []
    };
  },
  methods: {
    updateYear(value, radioButton) {
      this.localYears[radioButton.id].value = !this.localYears[radioButton.id].value;
      this.$store.dispatch("SET_CHOSEN_YEAR", value);
      this.validateYear()
    },
    initMonths() {
      for (let index = 1; index <= 12; index++) {
        this.months.push({
          id: index,
          name: this.getMonthName(index),
          value: false,
          offset: this.getOffset(index),
          days: this.getDays(index)
        });
      }
      this.$store.dispatch("SET_MONTHS", this.months);
    },
    getMonthName(id) {
      switch (id) {
        case 1:
          return "January";
        case 2:
          return "February";
        case 3:
          return "March";
        case 4:
          return "April";
        case 5:
          return "May";
        case 6:
          return "June";
        case 7:
          return "July";
        case 8:
          return "August";
        case 9:
          return "September";
        case 10:
          return "October";
        case 11:
          return "November";
        case 12:
          return "December";
        default:
          return "null";
      }
    },
    getOffset(id) {
      const localYear = this.getChosenYear;
      const getWeekDay = String(localYear) + "-" + String(id) + "-" + String(1);
      const dayOfWeek = new Date(getWeekDay).getDay();
      let weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      const monthStartDay = isNaN(dayOfWeek) ? null : weekDays[dayOfWeek];
      switch (monthStartDay) {
        case "Monday":
          return 0;
        case "Tuesday":
          return 1;
        case "Wednesday":
          return 2;
        case "Thursday":
          return 3;
        case "Friday":
          return 4;
        case "Saturday":
          return 5;
        case "Sunday":
          return 6;
        default:
          return 0;
      }
    },
    getDays(id) {
      const localYear = this.getChosenYear;
      let daysInMonth = new Date(localYear, id, 0).getDate();
      const dayArray = [];
      for (let index = 1; index <= daysInMonth; index++) {
        dayArray.push({
          id: index,
          value: false,
          bolk: this.insertBolk()
        });
      }
      return dayArray;
    },
    insertBolk() {
      let wantedBolks = [];
      for (let index = 1; index < 4; index++) {
        wantedBolks.push({
          id: index,
          name: `Bolk ${index}`,
          value: false
        });
      }
      return wantedBolks;
    },
    validateYear() {
      let mapped = this.localYears.map(year => year.value);
      if (mapped.some(this.isAnyTrue)) {
        this.$store.dispatch("SET_STEP_DISABLED", false);
      } else {
        this.$store.dispatch("SET_STEP_DISABLED", true);
      }
    },
    isAnyTrue(element) {
      if (element) {
        return true;
      }
      return false;
    }
  },
  computed: {
    getYears() {
      console.log(this.$store.getters.years)
      return this.$store.getters.years;
    },
    getChosenYear() {
      return this.$store.getters.chosenYear;
    }
  },
  mounted() {
    this.localYears = this.getYears;
    this.validateYear();
  }
};
</script>

<style></style>
