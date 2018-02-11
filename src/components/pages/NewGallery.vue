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
          alt="Sheriff Starry greeting the crowd at the Forest Lake Parade 2017" 
        />
      </b-carousel-slide>

      <b-carousel-slide>
        <img 
          class="img-slide" 
          :src="flParade2"
          alt="Sheriff Starry greeting the crowd at the Forest Lake Parade 2017" 
        />
      </b-carousel-slide>

      <b-carousel-slide>
        <img 
          class="img-slide" 
          :src="parade"
          alt="Sheriff Starry greeting the crowd at the Cottage Grove Parade 2017" 
        />
      </b-carousel-slide>

      <b-carousel-slide>
        <img 
          class="img-slide" 
          :src="cgParade"
          alt="Sheriff Starry speaking with citizens at the Cottage Grove Parade 2017" 
        />
      </b-carousel-slide>

      <b-carousel-slide>
        <img 
          class="img-slide" 
          :src="dan_and_smokey"
          alt="Sheriff Starry with his K-9 faithful companion, Smokey, was with him from 2000-2005." 
        />
      </b-carousel-slide>

       <b-carousel-slide>
        <img 
          class="img-slide" 
          :src="st_jude"
          alt="Sheriff Starry instructing D.A.R.E." 
        />
      </b-carousel-slide>

       <b-carousel-slide>
        <img 
          class="img-slide" 
          :src="dan_family"
          alt="Sheriff Starry’s family- Dan, his wife Jeanice, daughters Bethany and Megan"  
        />
      </b-carousel-slide>

       <b-carousel-slide>
        <img 
          class="img-slide" 
          :src="dan_students_stillwater"
          alt="Sheriff Starry speaking with children at a Stillwater School" 
        />
      </b-carousel-slide>



    </b-carousel>

</template>


<script>
import flParade from "../../assets/fl_parade_1.jpg";
import flParade2 from "../../assets/fl_parade_2.jpg";
import cgParade from "../../assets/cg_parade.jpg";
import parade from "../../assets/dan-starry-for-sheriff-campaign-event.jpg";
import dan_and_smokey from "../../assets/Dan_and_Smokey.jpg";
import st_jude from "../../assets/Dan_DARE_St_Judes.jpg";
import dan_family from "../../assets/Dan_Family.jpg";
import dan_students_stillwater from "../../assets/Dan_Students_Stillwater.jpg";

export default {
  name: "Gallery",
  components: {},
  data() {
    return {
      flParade,
      flParade2,
      cgParade,
      parade,
      dan_and_smokey,
      st_jude,
      dan_family,
      dan_students_stillwater
    };
  }
};
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
