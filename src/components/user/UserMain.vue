<template>
  <div class="main">
    <div class="__months" v-for="month in months" :key="month.id">
      <div class="__step_one" v-if="month.value == true">
        <SelectMonth
          :month="month"
          :offset="month.offset"
          :monthId="month.id"
          @clickBolkOne="updateBolkOne"
          @clickBolkTwo="updateBolkTwo"
          @clickBolkThree="updateBolkThree"
          @resetDay="resetDay"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SelectMonth from "@/components/user/SelectMonth.vue";

export default {
  data() {
    return {
      months: []
    };
  },
  components: {
    SelectMonth
  },
  methods: {
    updateBolkOne(bolk, month, day) {
      let localMonth = month - 1;
      let localDay = day - 1;
      this.months[localMonth].days[localDay].bolk[0].picked = true;
      let bolk1date =
        String(this.getYear) + "-" + String(month) + "-" + String(day);
      this.$store.dispatch("SET_BOLK_1_DATE", bolk1date);
    },
    updateBolkTwo(bolk, month, day) {
      let localMonth = month - 1;
      let localDay = day - 1;
      this.months[localMonth].days[localDay].bolk[0].picked = true;
      let bolk2date =
        String(this.getYear) + "-" + String(month) + "-" + String(day);
      this.$store.dispatch("SET_BOLK_2_DATE", bolk2date);
    },
    updateBolkThree(bolk, month, day) {
      let localMonth = month - 1;
      let localDay = day - 1;
      this.months[localMonth].days[localDay].bolk[0].picked = true;
      let bolk3date =
        String(this.getYear) + "-" + String(month) + "-" + String(day);
      this.$store.dispatch("SET_BOLK_3_DATE", bolk3date);
    },
    resetDay(bolk) {
      if (bolk.name == "Bolk 3") {
        this.$store.dispatch("SET_BOLK_3_DATE", "");
      } else if (bolk.name == "Bolk 2") {
        this.$store.dispatch("SET_BOLK_2_DATE", "");
      } else if (bolk.name == "Bolk 1") {
        this.$store.dispatch("SET_BOLK_1_DATE", "");
      }
    }
  },
  computed: {
    getMonths() {
      return this.$store.getters.months;
    },
    getYear() {
      return this.$store.getters.chosenYear;
    }
  },
  mounted() {
    this.months = this.getMonths;
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .__months {
    width: 100%;
    .__step__one {
      width: 100%;
    }
  }
}
</style>
