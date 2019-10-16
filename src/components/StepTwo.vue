<template>
  <div class="step__two">
    <PickMonths class="__months" :year="chosenYear" :months="months" @click="updateMonth" />
    <NavButtons class="__nav"/>
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

<style lang="scss" scoped>

.step__two{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  .__months{
    width: 40%;
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom: 2rem;
  }
}
</style>
