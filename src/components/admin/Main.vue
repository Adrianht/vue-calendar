<template>
  <div>
    <h1>Online Bookingsystem</h1>
    <div class="radio__months">
      <div class="__step__one" v-if="getStep === 1">
        <h2>Select a year</h2>
        <StepOne :years="years" />
      </div>
      <div class="__step__two" v-if="getStep === 2">
        <h2>Select months</h2>
        <StepTwo />
      </div>
    </div>
    <div v-if="getStep === 3">
      <h2>Update dates</h2>
      <StepThree />
      <button @click="goToUser">Finish</button>
    </div>
  </div>
</template>

<script>
import StepOne from "@/components/admin/StepOne.vue";
import StepTwo from "@/components/admin/StepTwo.vue";
import StepThree from "@/components/admin/StepThree.vue";

export default {
  components: {
    StepOne,
    StepTwo,
    StepThree
  },
  data() {
    return {
      months: [],
      years: [],
      chosenYear: 0
    };
  },
  methods: {
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
      this.$store.dispatch("SET_YEARS", localYears);
    },
    goToUser() {
      this.$emit("go_to_user");
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
      return this.$store.getters.chosenYear;
    }
  },
  created() {
    this.initYear();
  },
  mounted() {
    this.months = this.getMonths;
    this.chosenYear = this.getYear;
  }
};
</script>

<style lang="scss" scoped>
.radio__months {
  display: flex;
  align-items: center;
  justify-content: center;

  .__step__two {
    width: 100%;
  }
}
</style>
