<template>
  <div class="days">
    <div v-for="day in weekDays" :key="day.id">
      {{ day }}
    </div>
    <div class="__disabled" v-for="off in offset" :key="off.id">
      <button disabled></button>
    </div>
    <div class="__pickable" v-for="day in days" :key="day.id">
      {{ day.id }}
      <div v-if="day.value || day.bolk.length !== 3">
        <button class="reset__day" @click="resetDay(day.id)">Reset</button>
      </div>
      <div v-if="!day.value">
        <RadioButtons
          :month="month"
          :wantedRadio="day.bolk"
          @click="updateBolk"
          :day="day.id"
        />
      </div>
      <div v-if="!day.value">
        <button
          class="disable__day"
          @click="pickDay(day)"
          :disabled="day.value"
        >
          Disable
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButtons from "@/components/RadioButtons.vue";

export default {
  name: "Days",
  components: {
    RadioButtons
  },
  data() {
    return {
      weekDays: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      currentRadio: ""
    };
  },
  props: {
    days: Array,
    offset: Number,
    name: String,
    month: Number
  },
  methods: {
    pickDay(id) {
      this.$emit("click", id, this.month);
    },
    updateBolk(value, radioButton, month, day) {
      this.currentRadio = radioButton.id;
      this.$emit("clickRadioButton", value, radioButton, month, day);
    },
    resetDay(day) {
      this.$emit("clickReset", day, this.month, this.currentRadio);
    }
  }
};
</script>

<style lang="scss">
.days {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 14% 14% 14% 14% 14% 14% 14%;
  margin-bottom: 3rem;

  .__disabled {
    button {
      width: 100%;
      height: 100%;
    }
  }

  .__pickable {
    border: 1px solid black;
    button {
      width: 100%;
      height: 4rem;
    }
  }
}
</style>
