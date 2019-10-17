<template>
  <div class="main">
    <div class="__months" v-for="month in months" :key="month.id">
      <div class="__step_one" v-if="month.value == true">
        <SelectMonth :month="month" :offset="month.offset" :monthId="month.id" @clickBolk="updateBolk"/>
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
    updateBolk(bolk, month, day){
      console.log(bolk)
      console.log(month)
      console.log(day)
      let localMonth = month - 1
      let localDay = day - 1
      let chosenDay = this.months[localMonth].days[localDay].bolk[0]
      this.months[localMonth].days[localDay].bolk[0].picked = true
      let bolk1date = String(this.getYear) + '-' + String(month) + '-' + String(day)

      this.$store.dispatch("SET_BOLK_1_DATE", chosenDay)

    }
  },
  computed: {
    getMonths(){
      return this.$store.getters.months;
    },
    getYear(){
      return this.$store.getters.chosenYear;
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
  width: 100%;

  .__months{
    width: 100%;
    .__step__one {
      width: 100%;
    }
  }

}
</style>