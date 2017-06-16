import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '../components/About.vue'
import Gallery from '../components/Gallery.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    }
  ]
})
