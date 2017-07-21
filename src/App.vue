<template>
  <div id="app">
  <nav-bar></nav-bar>
    <router-view class="view"></router-view>
    <new-nav></new-nav>
    <footer-tag></footer-tag>
  </div>
</template>

<script>
import store from './store'
import NavBar from './components/parts/NavBar.vue'
import FooterTag from './components/parts/Footer.vue'
import NewNav from './components/replacement/NewNav.vue'

export default {
  name: 'app',
  store,
  components: {
    NavBar,
    FooterTag,
    NewNav
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.view {
  flex: 1 0 auto;
}
</style>
