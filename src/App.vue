<template>
  <div id="app">
<!--test nav-->

<div>
<b-nav>
    <b-nav-item>
      <router-link to="/" class="linker">Home</router-link>
    </b-nav-item>
        <b-nav-item>
      <router-link to="/bio">Biography</router-link>
    </b-nav-item>


  </b-nav-item-dropdown>
</b-nav>
</div>


  <!-- <nav-bar></nav-bar> -->
    <header-logo></header-logo>

    <router-view class="view"></router-view>

  <div id="donate-button">
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_s-xclick">
    <input type="hidden" name="hosted_button_id" value="J8VSDT9ZF666Q">

    <input type="submit" value="Donate   " >

    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
    </form>
  </div>

  <a 
    id="volunteer-button"
    href="https://docs.google.com/forms/d/e/1FAIpQLScuYRWRSnGXksbg3OkSUeRbawhzTOddHEpCdKSl-I7dDxW2pg/viewform?usp=sf_link"
  >Volunteer</a>


    <!-- <new-nav></new-nav> -->
    <footer-tag></footer-tag>
  </div>
</template>

<script>
import store from './store'
import NavBar from './components/parts/NavBar.vue'
import FooterTag from './components/parts/Footer.vue'
import HeaderLogo from './components/pages/HeaderLogo.vue'
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
    HeaderLogo
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
$red: #c00900;
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

input[type=submit] {
  background-color: $red;
  color: $white;
  border: none;
  font-weight: bold;
  padding: .3em 15em .3em .7em;
}

#donate-button {
  position: fixed;
  top: 55%;
  right: -18%;
  -webkit-transition: all .3s linear;
  -moz-transition: all .3s linear;
  transition: all .3s linear;
}

#volunteer-button {
  position: fixed;
  text-decoration: none;
  top: calc(55% + 40px);
  right: -18%;
  background-color: $red;
  color: $white;
  border: none;
  font-weight: bold;
  padding: .3em 14.6em .3em .7em;
  -webkit-transition: all .3s linear;
  -moz-transition: all .3s linear;
  transition: all .3s linear;
}

#donate-button:hover,
#donate-button:active {
  right: -16%
}

#volunteer-button:hover,
#volunteer-button:active {
  right: -16%
}

a:hover {
  color: #aaa;
}

b-nav {
  color: black
}

</style>
