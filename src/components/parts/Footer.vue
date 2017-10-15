<template>
    <div>
<h4 class="contact-heading">Contact</h4>
<ul class="footer-links">
    <li>
        <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScuYRWRSnGXksbg3OkSUeRbawhzTOddHEpCdKSl-I7dDxW2pg/viewform?usp=sf_link"
        >Volunteer </a>
    </li>     

    <li>
        <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfegzYo0NbB16yNSWXMXo6e_3aVJIWf3AmMOCOV7Rvh7bPRpg/viewform?usp=sf_link"
        >Send us a message!</a>
    </li>

    <li>
        <a href="https://www.facebook.com/starryforsheriff/"><span class="icon fi-social-facebook"></span>
        Facebook</a><a href="https://twitter.com/starry4sheriff"><span class="icon fi-social-twitter"></span>
        Twitter</a>
    </li>

</ul>   
<p>Prepared and Paid for By Dan Starry Committee to elect for sheriff</p>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
$navy: #000080;
$blue: #0000e6;
$type: #2c3e50;
$red: #ff2400;
$white: #fffafa;
$gray: #f3f2f2;

    div {
        text-align: center;
        background-color: #0f263f;
        color: $white;
    }
    a {
        color: $white;
    } 
    p {
        text-transform: uppercase;
        font-size: 8px;
    }
    .contact-heading {
        margin-top: 1em;
    }
    .bottom {

    }   
    ul.footer-links {
        list-style: none;
        margin: 0 0 2em 0;
        padding: 0;
    }
    li a:hover {
        color: #aaa;
        text-decoration: none;
    }
    .icon {
        margin: 0 10px;
        font-size: 20px;
    }
</style>
