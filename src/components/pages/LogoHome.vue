<template>
    <div>
        <b-jumbotron 
            class="jumbo"
            :style="styles"
            title="Dan Starry for Sheriff, running for Washington County Sheriff"
            fluid
        >

        </b-jumbotron>
        <div class="container home-row">
            <div class="row">
                
                <div class="col-xs-11">
                    <div class="card home-card">
                        <div class="card-block">
                            <h2>Proven Leadership You Can Trust</h2>
                            <h5 class="home-text">From Sheriff Starry:</h5>
                            <img 
                                :src="danImg" 
                                title="Dan Starry for Sheriff, Proven Leadership You Can Trust"
                            />
                            <p class="home-text">Working for Washington County Sheriff’s Office for the past 24 years has truly been an honor. I am very thankful to be serving the citizens who live, work and play in Washington County, alongside the great men and women who protect and serve this great county each day.</p>
                            <p class="home-text">My wife Jeanice, and I live and work in Stillwater; the birthplace of Minnesota. We are very proud to have raised two wonderful daughters. I have had the privilege to volunteer as a softball coach with many teams over the years.</p>
                            <p class="home-text">Early on in life, I had a mentor who was a police officer in the town where I grew up. He would come to our neighborhoods, step outside of his police car, play football with the children and visit with the families. He took the time to get know the people he protected and served. His is the example of community engagement that I have followed through my career at the Washington County Sheriff’s Office. I believe that effective communication and sound decision making are keys to building relationships. Sheriff Hutton was a strong believer of this and I will continue this serving as your Sheriff.</p>
                            <p class="home-text">My experiences over the past 6 years as Chief Deputy of Washington County Sheriff’s Office, has afforded me the opportunity to become a proven leader; a leader with the firsthand knowledge and ability to build strong relationships with our community partners and state leaders. My experience has also provided me with the perspective on innovation and technology needed to bring the Washington County Sheriff’s Office into the future for the benefit of the citizens we serve. Initiatives which target cybercrime criminals, human trafficking organizations and gaining control over the opioid overdose epidemic all inspire me to continue to dedicate my career to working collaboratively with our community partners, in an effort to respond and aid all persons who may be experiencing mental health crises.</p>
                            <p class="home-text">I have always lived by the motto <span class="navvy">“Do the right thing”.</span> I will continue to do the right thing serving as your Sheriff, with honor, integrity and pride.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-1"></div>

            </div>
        </div>

    </div>
</template>

<script>
    import bigImage from '../../assets/starrylogo.png'
    import danImg from '../../assets/Dan2photo0817.jpg'
    export default {
      name: 'newHome',
      data () {
          return {
              bigImage,
              danImg,
              styles: {
                  color: 'blue',
                  background: `url(${bigImage}) no-repeat center`,
                  backgroundSize: 'auto',
                  backgroundColor: ''
              }
          }
      }
    }
</script>

<style>
$navy: #0f263f;
$blue: #0000e6;
$type: #2c3e50;
$red: #ff2400;
$white: #fffafa;
$gray: #f3f2f2;

    img {
        max-width: 40%;
        float: left;
        margin-right: 1em;
    }
    .sign {
        text-align: left;
        color: $white;
        padding-right: 300px;
        padding-bottom: 200px;
        padding-top: 50px;
        padding-left: 50px;
        background-color: rgba(0, 0, 0, 0.3); 
    }
    .sign-post {
        font-size: 5em;
        font-weight: bolder;
    }
    .reddy {
        color: $red;
    }
    .bluey {
        color: $blue;
        /* -webkit-text-stroke: 2px $white; */
    }
    .navvy {
        color: $navy;
        font-weight: bold;
        /* -webkit-text-stroke: 2px $white; */
    }
    .home-text {
        text-align: left;
    }
    p.home-text {
        text-indent: 1.5em;
    }
    h5.home-text {
        margin-top: 2em;
    }
    .home-card {
        margin: 2em 0;
    }
    .jumbo {
        min-height: 480px;
    }

</style>
