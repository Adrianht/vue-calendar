<template>
  <div>
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
</template>

<script>
import Days from "@/components/Days.vue";
import NavButtons from "@/components/shared/NavButtons.vue";

export default {
  name: "StepThree",
  components: {
    Days,
    NavButtons
  },
  data() {
    return {
      months: []
    };
  },
  methods: {
    pickedDay(dayId, monthId) {
      const actualMonth = monthId - 1;
      const actualDay = dayId.id - 1;
      this.months[actualMonth].days[actualDay].value = true;
      this.months[actualMonth].days[actualDay].bolk = [];
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
    resetDay(day, month) {
      const actualDay = day - 1;
      const actualMonth = month - 1;
      this.months[actualMonth].days[actualDay].value = false;
      this.months[actualMonth].days[actualDay].bolk = this.insertBolk();
      this.$store.dispatch("SET_MONTHS", this.months);
    }
  },
  computed: {
    getMonths() {
      return this.$store.getters.months;
    }
  },
  mounted() {
    this.months = this.getMonths;
  }
};
</script>

<style></style>
