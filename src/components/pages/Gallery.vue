<template>
    <div>
    <action-call></action-call>
    <carousel-3d>
        <slide :index="0">
            <img :src="test1" alt="">
        </slide>
        <slide :index="1">
            <img :src="test2" alt="">        
        </slide>
        <slide :index="2">
            <div>
            <img :src="test3" alt="">
            </div>
        </slide>
        <slide :index="3">
            <img :src="test2" alt="">        
        </slide>
        <slide :index="4">
            <img :src="test3" alt="">
        </slide>
    </carousel-3d>
    </div>
</template>

<script>
    import {Carousel3d, Slide} from 'vue-carousel-3d'
    import test1 from '../../assets/test1.jpeg'
    import test2 from '../../assets/test2.jpeg'
    import test3 from '../../assets/test3.jpeg'
    import ActionCall from '../parts/ActionCall.vue'

    export default {
      name: 'Gallery',
      components: {
        Carousel3d,
        Slide,
        ActionCall
      },
      data () {
        return {
          test1,
          test2,
          test3
        }
      }
    }
</script>

<style>
    
</style>
