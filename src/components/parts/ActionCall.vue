<template>
    <a href="">A Call to Action</a>    
</template>

<script>
    export default {}
</script>

<style scoped>
    $navy: #003366;
    $type: #2c3e50;
    $red: #ff2400;
    $white: #fffafa;
    $gray: #cdc9c9;
    
    a {
        text-decoration: none;
        border: .1em solid $navy;
        border-radius: .5em;
        color: $white;
        background-color: $navy;
        padding: .5em 1em;
        margin: 1em;
        display: block;
        transition: all .2s linear;
    }

    a:hover {
        color: $navy;
        background-color: $white;
    }
</style>
