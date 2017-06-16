<template>
    <div>Gallery
    <carousel-3d>
        <slide :index="0">

        </slide>
        <slide :index="1">
        
        </slide>
        <slide :index="2">
        
        </slide>
        <slide :index="3">
        
        </slide>
        <slide :index="4">
        
        </slide>
    </carousel-3d>
    
    </div>
</template>

<script>
    import {Carousel3d, Slide} from 'vue-carousel-3d'

    export default {
      name: 'Gallery',
      components: {
        Carousel3d,
        Slide
      }
    }
</script>

<style>
    
</style>
