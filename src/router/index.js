import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/pages/Home";
import Meet from "../components/pages/Meet.vue";
import NewGallery from "../components/pages/NewGallery.vue";
import Events from "../components/pages/Events.vue";
import Volunteer from "../components/pages/Volunteer.vue";
import LogoHome from "../components/pages/LogoHome.vue";
import BioPage from "../components/pages/Bio.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "LogoHome",
      component: LogoHome
    },
    {
      path: "/bio",
      name: "Bio",
      component: BioPage
    },
    ,
    {
      path: "/gal",
      name: "Gallery",
      component: NewGallery
    },
    {
      path: "/events",
      name: "Events",
      component: Events
    }
    // {
    //   path: '/test',
    //   name: 'NewHome',
    //   component: NewHome
    // }
  ]
});
