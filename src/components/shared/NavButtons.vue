<template>
  <div class="buttons">
    <button
      @click="buttonClickPrevious()"
      class="prev-button"
      v-if="getStep != 1"
    >
      Previous step
    </button>
    <button
      @click="buttonClickNext()"
      class="next-button"
      v-if="getStep != 3"
      :disabled="isDisabled"
    >
      Next step
    </button>
  </div>
</template>

<script>
export default {
  name: "NavButtons",
  props: {
    direction: Number,
    maxstep: Number
  },
  methods: {
    buttonClickNext() {
      this.$emit("clickNext");
      this.$store.dispatch("SET_STEP_INCREMENT");
    },
    buttonClickPrevious() {
      this.$store.dispatch("SET_STEP_DECREMENT");
    }
  },
  computed: {
    getStep() {
      return this.$store.getters.step;
    },
    isDisabled() {
      return this.$store.getters.stepDisabled;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/mixins.scss";
@include buttons;
</style>
