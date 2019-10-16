<template>
  <div>
    <div class="radio__months">
      <div v-if="getStep === 1">
        <RadioButtons :wantedRadio="years" @click="updateYear" />
        <NavButtons />
      </div>
      <div v-if="getStep === 2">
        <PickMonths :year="chosenYear" :months="months" @click="updateMonth" />
        <NavButtons />
      </div>
    </div>
    <div v-if="getStep === 3">
      <div class="picked__month" v-for="month in months" :key="month.id">
        <div v-if="month.value">
          {{ month.name }}
          <Days
            :month="month.id"
            :name="month.name"
            :days="month.days"
            :offset="month.offset"
            @click="pickedDay"
            @clickRadioButton="radioButtonClicked"
            @clickReset="resetDay"
          />
        </div>
      </div>
      <NavButtons />
    </div>
  </div>
</template>

<script>
import Days from "@/components/Days.vue";
import PickMonths from "@/components/PickMonths.vue";
import RadioButtons from "@/components/RadioButtons.vue";
import NavButtons from "@/components/shared/NavButtons.vue";

export default {
  components: {
    Days,
    PickMonths,
    RadioButtons,
    NavButtons
  },
  data() {
    return {
      months: [],
      years: [],
      chosenYear: 0,
      yearConfirmed: false,
      errorMessage: "",
      showError: false,
      monthConfirmed: false
    };
  },
  methods: {
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
    },
    initYear() {
      let currentYear = new Date().getFullYear();
      let localYears = [];
      for (let index = 0; index < 5; index++) {
        localYears.push({
          id: index,
          name: currentYear,
          value: false
        });
        currentYear++;
      }
      this.years = localYears;
    },
    getOffset(id) {
      //Year should be dynamic
      const localYear = this.chosenYear;
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
      //Year should be dynamic
      const localYear = this.chosenYear;
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
    pickedDay(dayId, monthId) {
      const actualMonth = monthId - 1;
      const actualDay = dayId.id - 1;
      this.months[actualMonth].days[actualDay].value = true;
      this.months[actualMonth].days[actualDay].bolk = [];
      this.$store.dispatch("SET_MONTHS", this.months);
    },
    updateMonth(monthId) {
      const actualMonth = monthId - 1;
      this.months[actualMonth].value = !this.months[actualMonth].value;
      this.validateMonth()
      this.$store.dispatch("SET_MONTHS", this.months);
    },
    radioButtonClicked(event, radioButton, month, day) {
      const actualMonth = month - 1;
      const actualDay = day - 1;
      const actualRadioButton = radioButton.id - 1;

      let chosenRadio = this.months[actualMonth].days[actualDay].bolk;
      this.$store.dispatch("SET_MONTHS", this.months);

      let newArr = chosenRadio.filter(function(element) {
        if (element.id == chosenRadio[actualRadioButton].id) {
          return element;
        }
      });
      this.months[actualMonth].days[actualDay].bolk = newArr;
      this.$store.dispatch("SET_MONTHS", this.months);
    },
    resetDay(day, month) {
      const actualDay = day - 1;
      const actualMonth = month - 1;
      this.months[actualMonth].days[actualDay].value = false;
      this.months[actualMonth].days[actualDay].bolk = this.insertBolk();
      this.$store.dispatch("SET_MONTHS", this.months);
    },
    updateYear(value, radioButton) {
      this.initYear();
      this.showError = false;
      this.years[radioButton.id].value = !this.years[radioButton.id].value;
      this.chosenYear = parseInt(value);
      this.months = [];
      this.initMonths();
      this.validateYear();
      this.$store.dispatch("SET_YEAR", value);
    },
    validateYear() {
      if (this.chosenYear == 0) {
        this.showError = true;
        this.errorMessage = "Velg et år først";
        return;
      }
      this.showError = false;
      this.$store.dispatch('SET_STEP_DISABLED', false)
    },
    validateMonth(){
      let mapped = this.months.map(month => month.value)
      if(mapped.some(this.isAnyTrue)){
        this.$store.dispatch('SET_STEP_DISABLED', false)
      } else {
        this.$store.dispatch('SET_STEP_DISABLED', true)
      }
    },
    isAnyTrue(element){
      if(element){
        return true
      }
      return false
    }
  },
  computed: {
    getStep() {
      return this.$store.getters.step;
    },
    getMonths() {
      return this.$store.getters.months;
    },
    getYear() {
      return this.$store.getters.year;
    }
  },
  created() {
    this.initYear();
  },
  mounted() {
    this.months = this.getMonths;
    this.year = this.getYear;
  }
};
</script>

<style>
.radio__months {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>