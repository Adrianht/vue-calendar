<template>
  <div>
    <div v-for="month in months" :key="month.id">
      <input
        type="checkbox"
        name="checkbox"
        @click="updateWantedMonth(month.id)"
      />
      <label for="checkbox">
        {{ month.name }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "PickMonths",
  props: {
    months: Array
  },
  methods: {
    updateWantedMonth(monthId) {
      this.$emit("click", monthId);
    }
  }
};
</script>

<style></style>
