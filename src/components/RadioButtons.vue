<template>
  <div>
    <div v-for="radioButton in wantedBolk" :key="radioButton.name">
      <label id="radioButtonLabel">
        <input
          type="radio"
          :value="radioButton.name"
          :name="'Bolk' + month + day"
          @click="radioButtonClicked($event, radioButton, month, day)"
        />
        <span>{{ radioButton.name }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioButtons",
  props: {
    wantedBolk: Array,
    month: Number,
    day: Number
  },
  methods: {
    radioButtonClicked(event, radioButton, month, day) {
      this.$emit("click", event.target.value, radioButton, month, day);
    }
  }
};
</script>

<style lang="scss" scoped></style>
