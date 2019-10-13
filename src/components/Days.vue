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
      <div v-if="!day.value">
        <Checkbox
          :month="month"
          :wantedBolk="day.bolk"
          @click="updateBolk"
          :day="day.id"
        />
      </div>
      <button @click="pickDay(day)" :disabled="day.value">Disable</button>
    </div>
  </div>
</template>

<script>
import Checkbox from "@/components/Checkbox.vue";

export default {
  name: "Days",
  components: {
    Checkbox
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
      ]
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
    updateBolk(value, checkbox, month, day) {
      this.$emit("clickCheck", value, checkbox, month, day);
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
      height: 4rem;
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
