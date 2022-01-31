<template>
<div class="porfolioWindow__inner">
    <div class="row no-guers">
        <div class="col-12 pb-3 px-0 active">
            <div class="d-lg-none">
                <h1>FUTURE</h1>
                <h1>SESSIONS</h1>
            </div>
        </div>
        <div class="col-12 pb-2 px-0 ">
            <figure class="browserWrap mb-5">
                <img src="../assets/portfolio/fshome.png" @click="$emit('openVid','513838586')" @load="$emit('imgRdy')">
                <span class="browserWrap__play"></span>
            </figure>
            <ul class="aniBars">
                <li><strong >URL:</strong><span><a class="text-white" href="https://futuresessions2018.futureeverything.org/">futuresessions2018.futureeverything.org</a></span></li>
                <li><strong >Server side:</strong><span>PHP, WordPress, ACF</span></li>
                <li><strong >Front end:</strong>jQuery, Gsap.js, Bootstrap</li>
                <li><strong >Design:</strong>Adobe XD & Illustrator </li>
            </ul>
        </div>
        <div class="row">
            <div class="col-12 col-md-4">
                <p>Future Sessions is an event hosted by Future Everything based around art and technology. For this project, I used tech elements, animations and glitches to create a design that fit with their existing brand, yet gave the event its own unique online identity.</p>
            </div>
            <div class="col-12 col-md-8 mb-5">
                <div class="browserWrap">
                    <span class="browserWrap__bar"></span>
                    <img src="../assets/portfolio/fs2.jpg" @load="$emit('imgRdy')">
                </div>
            </div>
            <div class="col-12">
                <p style="font-weight:600"> Tech stuff:</p>
                <p>Built on WordPress, the site features a backend that allows the content team to easily add, pages, posts, change menu options, add artists and add booking information. </p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "projectFS",
}
</script>

<style lang="scss">
</style>
