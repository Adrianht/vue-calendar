<template>
  <div>
    <PickMonths :year="chosenYear" :months="months" @click="updateMonth" />
    <NavButtons />
  </div>
</template>

<script>
import PickMonths from "@/components/PickMonths.vue";
import NavButtons from "@/components/shared/NavButtons.vue";

export default {
  name: "StepTwo",
  components: {
    PickMonths,
    NavButtons
  },
  data() {
    return {
      chosenYear: 0,
      months: []
    };
  },
  methods: {
    updateMonth(monthId) {
      const actualMonth = monthId - 1;
      this.months[actualMonth].value = !this.months[actualMonth].value;
      this.$store.dispatch("SET_MONTHS", this.months);
    }
  },
  computed: {
    getChosenYear() {
      return parseInt(this.$store.getters.chosenYear);
    },
    getMonths() {
      return this.$store.getters.months;
    }
  },
  mounted() {
    this.chosenYear = this.getChosenYear;
    this.months = this.getMonths;
  }
};
</script>

<style></style>
