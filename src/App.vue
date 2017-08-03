<template>
  <div id="app">
  <!-- <nav-bar></nav-bar> -->
    <router-view class="view"></router-view>
    <div class="buttons">

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="J8VSDT9ZF666Q">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>


    </div>
    <!-- <new-nav></new-nav> -->
    <footer-tag></footer-tag>
  </div>
</template>

<script>
import store from './store'
import NavBar from './components/parts/NavBar.vue'
import FooterTag from './components/parts/Footer.vue'
import NewNav from './components/replacement/NewNav.vue'
import donate from './assets/button_donate.gif'
import vol from './assets/button_volunteer.gif'

export default {
  name: 'app',
  store,
  components: {
    NavBar,
    FooterTag,
    NewNav,
  },
  data() {
    return {
      donate,
      vol
    }
  }
}
</script>

<style>
$navy: #000080;
$blue: #0000e6;
$type: #2c3e50;
$red: #ff2400;
$white: #fffafa;
$gray: #f3f2f2;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: $gray;
  position: relative;
}
.view {
  flex: 1 0 auto;
}
.buttons {
  position: fixed;
  top: 80%;
  right: 1%;
}
</style>
