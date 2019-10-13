<template>
  <div class="days">
    <div v-for="day in weekDays" :key="day.id">
      {{ day }}
    </div>
    <div v-for="off in offset" :key="off.id">
      <button disabled></button>
    </div>
    <div class="__pickable" v-for="day in days" :key="day.id">
      <button @click="pickDay(day)" :disabled="day.value">{{ day.id }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Days",
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

  button {
    width: 100%;
    height: 4rem;
  }

  .__pickable {
    width: 100%;
    height: 100%;
  }
}
</style>
