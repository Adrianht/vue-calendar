<template>
  <div>
    <div v-for="month in months" :key="month.id + '-' + year">
      <input
        type="checkbox"
        name="checkbox"
        @click="updateWantedMonth(month.id)"
        :checked="month.value"
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
    months: Array,
    year: Number
  },
  methods: {
    updateWantedMonth(monthId) {
      this.$emit("click", monthId);
    }
  }
};
</script>

<style></style>
