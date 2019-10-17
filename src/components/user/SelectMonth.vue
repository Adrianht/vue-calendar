<template>
  <div >
    <h1>
      {{month.name}}
    </h1>
    <div class="days">
      <div v-for="day in weekDays" :key="day.id">
        {{ day }}
      </div>
      <div class="__disabled" v-for="n in offset" :key="n + offsetExtra">
        <button disabled></button>
      </div>
      <div class="__pickable" v-for="day in month.days" :key="day.id" >
        {{day.id}}
        <div v-if="!day.value">
          {{day}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectMonth",
  data(){
    return{
      weekDays: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      offsetExtra: "offset"
    }
  },
  props: {
    month: Object,
    offset: Number
  }
}
</script>

<style lang="scss" scoped>
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