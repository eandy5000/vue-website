<template>
  <div>
    <section>
    <h1 class="lead">Opening remarks</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam similique expedita nihil doloremque, et soluta ex quam hic alias odit maiores illum eius fugiat doloribus suscipit, omnis, labore quos pariatur.
    </p>
    <action-call></action-call>
    </section>
    <section>
    <h2 class="headline">Endorsements</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit soluta sunt maiores vero. In nobis earum reiciendis rerum. Perspiciatis voluptatibus, perferendis modi pariatur veritatis consequatur ullam labore corporis. Fugit, placeat.</p>
    </section>
  </div>
</template>

<script>
import ActionCall from '../parts/ActionCall.vue'

export default {
  name: 'home',
  computed: {},
  components: {
    ActionCall
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  $navy: #003366;
  $type: #2c3e50;
  $red: #ff2400;
  $white: #fffafa;
  $gray: #cdc9c9;

  div {
    background-color: $white;
  }
  
  section {
    border: .1em solid $type;
    border-radius: .3em;
    background-color: $gray;
    margin: 1em;
  }

  .lead {
    color: $navy;
  }

</style>
