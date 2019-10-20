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
            <div v-if="!pickedBolkOne && !checkBolk(1)">
              <button
                @click="clickBolk(day.bolk[0], day.id)"
                class="__bolk_1"
              >
                Pick
              </button>
            </div>
            <div v-if="day.bolk[0].picked">
              <button
                @click="resetDay(day.bolk[0])"
                class="__bolk_1__picked__reset"
              >
                Reset
              </button>
              <button disabled class="__bolk_1__picked">Picked Bolk 1</button>
            </div>
          </div>
          <div v-if="day.bolk[0].name == bolk2">
            <div v-if="!pickedBolkTwo && !checkBolk(2)">
              <button
                @click="clickBolk(day.bolk[0], day.id)"
                class="__bolk_2"
              >
                Pick
              </button>
            </div>
            <div v-if="day.bolk[0].picked">
              <button
                @click="resetDay(day.bolk[0])"
                class="__bolk_2__picked__reset"
              >
                Reset
              </button>
              <button disabled class="__bolk_2__picked">Picked Bolk 2</button>
            </div>
          </div>
          <div v-if="day.bolk[0].name == bolk3">
            <div v-if="!pickedBolkThree && !checkBolk(3)">
              <button
                @click="clickBolk(day.bolk[0], day.id)"
                class="__bolk_3"
              >
                Pick
              </button>
            </div>
            <div v-if="day.bolk[0].picked">
              <button
                @click="resetDay(day.bolk[0])"
                class="__bolk_3__picked__reset"
              >
                Reset
              </button>
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
    clickBolk(bolk, day){
      if (bolk.name == "Bolk 1") {
        this.pickedBolkOne = true;
      } else if (bolk.name == "Bolk 2") {
        this.pickedBolkTwo = true;
      } else if (bolk.name == "Bolk 3") {
        this.pickedBolkThree= false;
      }
      this.$emit("clickBolk", bolk, this.monthId, day)
    },
    checkBolk(chosenBolk) {
      const bolk1Date = this.getBolk1Date;
      const bolk2Date = this.getBolk2Date;
      const bolk3Date = this.getBolk3Date;

      if(chosenBolk == 1 && bolk1Date !== ""){
        return true
      } else if (chosenBolk == 2 && bolk2Date !== ""){
        return true
      } else if (chosenBolk == 3 && bolk3Date !== ""){
        return true
      }
      return false
    },
    resetDay(bolk) {
      bolk.picked = false;
      if (bolk.name == "Bolk 3") {
        this.pickedBolkThree = false;
      } else if (bolk.name == "Bolk 2") {
        this.pickedBolkTwo = false;
      } else if (bolk.name == "Bolk 1") {
        this.pickedBolkOne = false;
      }
      this.$emit("resetDay", bolk);
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
