<template>
  <div>
    Home
    {{test}}
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    test () {
      return this.$store.state.test
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
