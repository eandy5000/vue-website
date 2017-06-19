<template>
    <div class="nav">
    <p class="nav-title">Website Name/ Logo</p>    
    <ul>
        <li><router-link class="link" v-bind:to="{path: '/'}">Home</router-link></li>
        <li><router-link class="link" v-bind:to="{path: '/about'}">About</router-link></li>
        <li><router-link class="link" v-bind:to="{path: '/gallery'}">Gallery</router-link></li>
    </ul>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    
        $navy: #000080;
        $type: #2c3e50;
        $red: #ff2400;
        $white: #fffff0;

    div,
    p {
        display: flex;
        margin: 0;
        padding: 0;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
    }
    .link {
        color: $white;
        text-decoration: none;
        margin-left: 1em;
    }
    .nav-title {
        margin-right: auto;
        color: $red;
        font-size: 1.5em;
        font-weight: bold;
    }
    .nav {
        background-color: $navy;
        padding: 1em;
    }
</style>
