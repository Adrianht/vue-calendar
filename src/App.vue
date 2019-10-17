<template>
  <div id="app">
    <div v-if="!showUserView">
      <Main @go_to_user="showUser"/>
    </div>
    <div v-if="showUserView">
      <UserMain />
    </div>
  </div>
</template>

<script>
import Main from "./components/admin/Main.vue";
import UserMain from "./components/user/UserMain.vue";


export default {
  name: "app",
  components: {
    Main,
    UserMain
  },
  data(){
    return{
      showUserView: false
    }
  },
  methods: {
    showUser(){
      this.showUserView = true
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
