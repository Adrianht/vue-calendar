<template>
  <div>
    <div v-for="checkbox in wantedBolk" :key="checkbox.name">
      <label id="checkboxLabel">
        <input
          type="radio"
          :value="checkbox.name"
          @click="checkboxClicked($event, checkbox, month, day)"
          :checked="checkbox.value"
          :name="'Bolk' + month + day"
        />
        <span>{{ checkbox.name }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    wantedBolk: Array,
    month: Number,
    day: Number
  },
  methods: {
    checkboxClicked(event, checkbox, month, day) {
      this.$emit("click", event.target.value, checkbox, month, day);
    }
  }
};
</script>

<style lang="scss" scoped></style>
