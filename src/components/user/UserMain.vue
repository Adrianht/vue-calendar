<template>
  <div class="main">
    <div class="__months" v-for="month in months" :key="month.id">
      <div class="__step_one" v-if="month.value == true">
        <SelectMonth
          :month="month"
          :offset="month.offset"
          :monthId="month.id"
          @clickBolk="clickBolk"
          @resetDay="resetDay"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SelectMonth from "@/components/user/SelectMonth.vue";
          // @clickBolkOne="updateBolkOne"
          // @clickBolkTwo="updateBolkTwo"
          // @clickBolkThree="updateBolkThree"

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
    clickBolk(bolk, month, day){
      let localMonth = month - 1;
      let localDay = day - 1;
      this.months[localMonth].days[localDay].bolk[0].picked = true;
      let bolkDate = String(this.getYear) + "-" + String(month) + "-" + String(day);
      if (bolk.name == "Bolk 1") {
        this.$store.dispatch("SET_BOLK_1_DATE", bolkDate);
      } else if (bolk.name == "Bolk 2") {
        this.$store.dispatch("SET_BOLK_2_DATE", bolkDate);
      } else if (bolk.name == "Bolk 3") {
        this.$store.dispatch("SET_BOLK_3_DATE", bolkDate);
      }
    },
    resetDay(bolk) {
      if (bolk.name == "Bolk 1") {
        this.$store.dispatch("SET_BOLK_1_DATE", "");
      } else if (bolk.name == "Bolk 2") {
        this.$store.dispatch("SET_BOLK_2_DATE", "");
      } else if (bolk.name == "Bolk 3") {
        this.$store.dispatch("SET_BOLK_3_DATE", "");
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
