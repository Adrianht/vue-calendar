<template>
  <div class="main">
    <h1>
      {{ month.name }}
    </h1>
    <div class="days">
      <div v-for="day in weekDays" :key="day.id">
        {{ day }}
      </div>
      <div class="__disabled" v-for="n in offset" :key="n + offsetExtra">
        <button disabled></button>
      </div>
      <div class="__pickable" v-for="day in month.days" :key="day.id">
        {{ day.id }}
        <div v-if="!day.value">
          <div v-if="day.bolk[0].name == bolk1">
            <div v-if="!pickedBolkOne && !checkBolk1()">
              <button
                @click="clickBolkOne(day.bolk[0], day.id)"
                class="__bolk_1"
              >
                Pick
              </button>
            </div>
            <div v-if="day.bolk[0].picked">
              <button class="__bolk_1__picked__reset">Reset</button>
              <button disabled class="__bolk_1__picked">Picked Bolk 1</button>
            </div>
          </div>
          <div v-if="day.bolk[0].name == bolk2">
            <div v-if="!pickedBolkTwo && !checkBolk2()">
              <button
                @click="clickBolkTwo(day.bolk[0], day.id)"
                class="__bolk_2"
              >
                Pick
              </button>
            </div>
            <div v-if="day.bolk[0].picked">
              <button class="__bolk_2__picked__reset">Reset</button>
              <button disabled class="__bolk_2__picked">Picked Bolk 2</button>
            </div>
          </div>
          <div v-if="day.bolk[0].name == bolk3">
            <div v-if="!pickedBolkThree && !checkBolk3()">
              <button
                @click="clickBolkThree(day.bolk[0], day.id)"
                class="__bolk_3"
              >
                Pick
              </button>
            </div>
            <div v-if="day.bolk[0].picked">
              <button class="__bolk_3__picked__reset">Reset</button>
              <button disabled class="__bolk_3__picked">Picked Bolk 3</button>
            </div>
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
      offsetExtra: "offset",
      bolk1: "Bolk 1",
      bolk2: "Bolk 2",
      bolk3: "Bolk 3",
      checkDate: true,
      chosenDay: [],
      pickedBolkOne: false,
      pickedBolkTwo: false,
      pickedBolkThree: false
    };
  },
  props: {
    month: Object,
    offset: Number,
    monthId: Number
  },
  methods: {
    clickBolkOne(bolk, day) {
      this.pickedBolkOne = true;
      this.$emit("clickBolkOne", bolk, this.monthId, day);
    },
    clickBolkTwo(bolk, day) {
      this.pickedBolkTwo = true;
      this.$emit("clickBolkTwo", bolk, this.monthId, day);
    },
    clickBolkThree(bolk, day) {
      this.pickedBolkThree = true;
      this.$emit("clickBolkThree", bolk, this.monthId, day);
    },
    checkBolk1() {
      const localDate = this.getBolk1Date;
      if (localDate !== "") {
        return true;
      }
      return false;
    },
    checkBolk2() {
      const localDate = this.getBolk2Date;
      if (localDate !== "") {
        return true;
      }
      return false;
    },
    checkBolk3() {
      const localDate = this.getBolk3Date;
      if (localDate !== "") {
        return true;
      }
      return false;
    }
  },
  computed: {
    getBolk1Date() {
      return this.$store.getters.bolk_1_date;
    },
    getBolk2Date() {
      return this.$store.getters.bolk_2_date;
    },
    getBolk3Date() {
      return this.$store.getters.bolk_3_date;
    }
  }
};
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

      &.__bolk_1 {
        background-color: green;

        &__picked {
          height: 3rem;
          background-color: green;

          &__reset {
            height: 3rem;
          }
        }
      }
      &.__bolk_2 {
        background-color: yellow;

        &__picked {
          height: 3rem;
          background-color: yellow;

          &__reset {
            height: 3rem;
          }
        }
      }

      &.__bolk_3 {
        background-color: orange;

        &__picked {
          height: 3rem;
          background-color: orange;

          &__reset {
            height: 3rem;
          }
        }
      }
    }
  }
}
</style>
