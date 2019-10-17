<template>
  <div class="main">
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
          <div v-if="day.bolk[0].name == bolk1">
            <button @click="clickBolkOne(day.bolk[0], day.id)" class="__bolk_1">Pick</button>
          </div>
          <div v-if="day.bolk[0].name == bolk2">
            <button @click="clickBolkTwo" class="__bolk_2">Pick</button>
          </div>
          <div v-if="day.bolk[0].name == bolk3">
            <button @click="clickBolkThree" class="__bolk_3">Pick</button>
          </div>
        </div>
        <div class="__disabled" v-if="day.value">
          <button disabled></button>
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
      offsetExtra: "offset",
      bolk1: "Bolk 1",
      bolk2: "Bolk 2",
      bolk3: "Bolk 3",
      checkDate: true,
      chosenDay: []
    }
  },
  props: {
    month: Object,
    offset: Number,
    monthId: Number
  },
  methods: {
    clickBolkOne(bolk, day){
      // let localMonth = this.monthId
      this.$emit('clickBolk', bolk, this.monthId, day)
    },
    clickBolkTwo(){

    },
    clickBolkThree(){
      
    },
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
      height: 7rem;
    }
  }

  .__pickable {
    border: 1px solid black;
    button {
      width: 100%;
      height: 7rem;

      &.__bolk_1{
        background-color: green
      }
      &.__bolk_2{
        background-color: yellow
      }

      &.__bolk_3{
        background-color: orange
      }
    }
  }
}
</style>