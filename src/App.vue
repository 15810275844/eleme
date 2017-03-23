<template>
  <div id="app">
    <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
    <m-footer></m-footer>
  </div>
</template>

<script>
import footer from "./components/footer/Footer.vue";
export default {
  name: 'app',
  components: {
    'm-footer':footer
  },
  watch:{
    $route(to){
      
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size:0.24rem;
  font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
}
</style>
