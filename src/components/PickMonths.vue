<template>
  <div>
    <div class="__month" v-for="month in months" :key="month.id + '-' + year">
      <label>
        <input
          type="checkbox"
          name="checkbox"
          @click="updateWantedMonth(month.id)"
          :checked="month.value"
        />
        <span for="checkbox">
          {{ month.name }}
        </span>
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

<style lang="scss" scoped>
@import "@/mixins.scss";
@include input-radio-checkboxes;

.__month{
  margin-bottom: .5rem;
}
</style>


