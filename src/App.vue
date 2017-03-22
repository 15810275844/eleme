<template>
  <div id="app">
    <router-view></router-view>
    <m-footer></m-footer>
  </div>
</template>

<script>
import footer from "./components/footer/Footer.vue";
export default {
  name: 'app',
  components: {
    'm-footer':footer
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
