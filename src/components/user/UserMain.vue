<template>
  <div class="main">
    <div v-for="month in months" :key="month.id">
      <div class="__step_one" v-if="month.value == true">
        <SelectMonth :month="month" :offset="month.offset"/>
      </div>
    </div>
  </div>
</template>

<script>
import SelectMonth from "@/components/user/SelectMonth.vue";

export default {
  data(){
    return{
      months: []
    }
  },
  components: {
    SelectMonth,
  },
  methods: {

  },
  computed: {
    getMonths(){
      return this.$store.getters.months;
    }
  },
  mounted(){
    this.months = this.getMonths;
    console.log(this.months)
  }
}
</script>

<style lang="scss" scoped> 
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .__step__one {
    width: 100%;
  }
}
</style>