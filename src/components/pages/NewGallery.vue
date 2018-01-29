<template>

    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="12000"
    >
    <h2>Image Gallery</h2>

      <b-carousel-slide>
        <img 
          class="img-slide" 
          :src="flParade" 
        />
      </b-carousel-slide>

      <b-carousel-slide>
        <img 
          class="img-slide" 
          :src="flParade2" 
        />
      </b-carousel-slide>

      <b-carousel-slide>
        <img 
          class="img-slide" 
          :src="parade" 
        />
      </b-carousel-slide>

      <b-carousel-slide>
        <img 
          class="img-slide" 
          :src="cgParade" 
        />
        
      </b-carousel-slide>



    </b-carousel>

</template>


<script>
    import flParade from '../../assets/fl_parade_1.jpg';
    import flParade2 from '../../assets/fl_parade_2.jpg';
    import cgParade from '../../assets/cg_parade.jpg';
    import parade from '../../assets/dan-starry-for-sheriff-campaign-event.jpg';

    export default {
      name: 'Gallery',
      components: {

      },
      data () {
        return {
          flParade,
          flParade2,
          cgParade,
          parade
        }
      }
    }
</script>

<style>

    .img-slide {
      max-width: 75%;
      margin: 1em auto;
    }
    .jumbotron {
      margin-bottom: 0 !important;
    }

</style>
