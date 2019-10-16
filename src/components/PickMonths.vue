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
.__month{
  margin-bottom: .5rem;
}

label {
    display: flex;
    margin: 1rem 0 0 25%;
  }

  input {
    &[type=radio],
    &[type=checkbox] {
      position: absolute;
      top: auto;
      clip-path: polygon(0 0);
      -webkit-clip-path: polygon(0 0);
    }

    + span {
      max-width: calc(100% - 2em);
      text-indent: 1em;
    }
  }

  input {
    &[type=radio] + span::before,
    &[type=checkbox] + span::before {
      content: '';
      background: #fff;
      border: .1em solid #0060A3;
      background-color: #fff;
      display: block;
      box-sizing: border-box;
      float: left;
      width: 1.5em;
      height: 1.5em;
      cursor: pointer;
      text-align: center;
      transition: all .1s ease-out;
    }
  }

  input {
    &[type=radio]:checked + span::before,
    &[type=checkbox]:checked + span::before {
      background-color: #fff;
      box-shadow: inset 0 0 0 .5em #0060A3;
      border: 1em;
    }

    &:focus {
      border: 2px solid #0060A3;
    }

    &:hover {
      border: 2px solid #0060A3;
    }
  }
</style>


