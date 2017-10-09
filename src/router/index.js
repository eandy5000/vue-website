import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Meet from '../components/pages/Meet.vue'
import Gallery from '../components/pages/Gallery.vue'
import Events from '../components/pages/Events.vue'
import Volunteer from '../components/pages/Volunteer.vue'
import LogoHome from '../components/pages/LogoHome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LogoHome',
      component: LogoHome
    }
    // ,{
    //   path: '/meet',
    //   name: 'Meet',
    //   component: Meet
    // },
    // {
    //   path: '/gallery',
    //   name: 'Gallery',
    //   component: Gallery
    // },
    // {
    //   path: '/volunteer',
    //   name: 'Volunteer',
    //   component: Volunteer
    // },
    // {
    //   path: '/events',
    //   name: 'Events',
    //   component: Events
    // },
    // {
    //   path: '/test',
    //   name: 'NewHome',
    //   component: NewHome
    // }
  ]
})
