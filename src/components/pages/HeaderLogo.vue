<template>
    <div>
        <b-jumbotron 
            class="jumbo"
            :style="styles"
            title="Dan Starry for Sheriff, running for Washington County Sheriff"
            fluid
        >
        </b-jumbotron>
    </div>    
</template>

<script>
    import bigImage from '../../assets/newLogo.png'
    export default {
      name: 'headerLogo',
      data () {
          return {
              bigImage,
              styles: {
                  color: 'blue',
                  background: `url(${bigImage}) no-repeat center`,
                  backgroundSize: 'auto',
                  backgroundColor: '#0f263f'
              }
          }
      }
    }    
</script>

<style>

</style>
