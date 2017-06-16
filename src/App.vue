<template>
  <div id="app">
  <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import store from './store'
import NavBar from './components/parts/NavBar.vue'

export default {
  name: 'app',
  store,
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
