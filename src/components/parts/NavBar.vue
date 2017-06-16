<template>
    <div>
    <p class="nav-title">Website Name</p>    
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
        color: #2c3e50;
        text-decoration: none;
        margin-left: 1em;
    }
    .nav-title {
        margin-right: auto;
    }
</style>
