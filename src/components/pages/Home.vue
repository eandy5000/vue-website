<template>
  <div>
    <section>
    <h1 class="lead">This is the lead sentance</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam similique expedita nihil doloremque, et soluta ex quam hic alias odit maiores illum eius fugiat doloribus suscipit, omnis, labore quos pariatur.</p>
    </section>
    <section>
    <h2 class="headline">More information</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit soluta sunt maiores vero. In nobis earum reiciendis rerum. Perspiciatis voluptatibus, perferendis modi pariatur veritatis consequatur ullam labore corporis. Fugit, placeat.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  $navy: #000080;
  $type: #2c3e50;
  $red: #ff2400;
  $white: #fffff0;
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
