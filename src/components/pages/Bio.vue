<template>
     <div class="container home-row">
            <div class="row">
                
                <div class="col-xs-11">
                    <div class="card home-card">
                        <div class="card-block">
                            <h2>Sheriff Starry</h2>
                            <h5 class="home-text">Dan's Story</h5>
                            <img 
                                :src="danImg" 
                                title="Dan Starry for Sheriff, Proven Leadership You Can Trust, running for Washington County Sheriff"
                            />
                            <p class="home-text">In 1993, Dan Starry was hired by Washington County Sheriff Jim Trudeau as a deputy sheriff; serving both general patrol, and later the communities of Mahtomedi, Willernie and Dellwood. During this time; Dan was privileged to serve the students of Withrow Elementary School, St. Jude’s of the Lake Catholic School, O.H. Anderson School, and the Mahtomedi Middle School as their Drug Abuse Resistance and Education (DARE) Officer, all the while serving in the Narcotics Division and later the Youth Unit within the Washington County Sheriff’s Office.</p>
                            <p class="home-text">During the course of his career with Washington County Sheriff’s Office, Dan was honored to accept the challenge of becoming a K9 handler; attending St. Paul Police Department’s K9 Handler program with his partner, Smokey. The team of Dan and K9 Smokey were a fixture at Washington County Sheriff’s Office for over five years; assisting with numerous operations which resulted in positive outcomes for the citizens of Washington County. Dan and Smokey were recognized in 2004 by the United States Police Canine Association for being the “Fourth Quarter 2004 Patrol Dog” for outstanding performance in the detection and prevention of crime.</p>
                            <p class="home-text">During Dan’s 24-year career as a law enforcement officer with the Washington County Sheriff’s Office; he had the privilege to serve in numerous capacities; all of which helped shape and enhance his leadership style. The roles included: crime prevention officer, field training officer, explorer advisor, SWAT operator; SWAT team leader; SWAT Team Commander; SWAT Overall Commander; Patrol Sergeant; Fleet Sergeant; Commander; Chief Deputy, and now as your Sheriff. While serving in these vital roles, he gained experience in financial administration, program development, strategic planning, leadership, crisis management, overseeing staff training, and relationship building.</p>
                            <p class="home-text">Dan received his bachelor of science degree from St. Mary’s University and has attended the FBI National Academy and the FBI Law Enforcement Executive Development Association program. Dan serves on the Executive Board for the North Central High Intensity Drug Trafficking Area, member of the Minnesota Violent Crime Coordinated Council and on the Executive Board of the United Way of Washington County East.</p>
                            <p class="home-text">Dan and his wife Jeanice have been married for over 24 years and reside in Stillwater. They have two wonderful daughters, Bethany (23) and Megan (21). As a family, Starry’s enjoy playing and attending sporting events, fishing, being outside, and learning about and exploring new destinations.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-1"></div>

            </div>
        </div>
</template>

<script>
    import danImg from '../../assets/Dan2photo0817.jpg'
    export default {
        data() {
            return {
                danImg
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
