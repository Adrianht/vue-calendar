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
      let mapped = this.months.map(element => element.value)
      if(mapped.some(this.isAnyTrue)){
        this.$store.dispatch("SET_STEP_DISABLED", false)
      } else {
        this.$store.dispatch("SET_STEP_DISABLED", true)
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
    this.$store.dispatch('SET_STEP_DISABLED', true)
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
    width: 20%;
    display: grid;
    margin-bottom: 2rem;
  }
  .__nav{
    width: 25%;
  }
}
</style>