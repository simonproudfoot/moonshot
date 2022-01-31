<template>
<div class="porfolioWindow__inner">
    <div class="row no-guers">
        <div class="col-12 pb-3 px-0 active">
            <div class="d-lg-none">
                <h1>JUST ECO</h1>
            </div>
        </div>
        <div class="col-12 pb-2 ">
            <figure>
                <img src="../assets/portfolio/eco1.jpg" alt="" class="mb-3" @load="$emit('imgRdy')">
            </figure>
            <ul class="aniBars">
                <li><strong >Server side:</strong><span>WordPress</span></li>
                <li><strong >Front end:</strong>Bootstrap, jQuery, </li>
                <li><strong >Design:</strong>Adobe XD, illustrator & After Effects</li>
            </ul>
            <p>Branding, animation, web page and illustrations for Justeco.co.uk. The aim of the project is to attract a wide demo graph of possible customers for free boiler installations. I tried to make the site as simple as and inviting as possible. I built the site on Wordpress and made a dynamic application form with jQuery that guides the user through the questions as quickly as possible to improve on conversion rates.
            </p>
        </div>
        <div class="col-12">
        </div>
        <div class="col-12">
            <figure class="browserWrap m">
                <img src="../assets/portfolio/ecovid.jpg" alt="" class="mb-3" @load="$emit('imgRdy')" @click="$emit('openVid','144768152')" style="opacity: 0.7">
                <span class="browserWrap__play"></span>
            </figure>
        </div>
        <div class="col-6">
            <figure>
                <img src="../assets/portfolio/boiler.jpg" alt="" class="mb-3" @load="$emit('imgRdy')">
            </figure>

            <p style="font-weight:600">Tech stuff:</p>
            <ul>
                <li>Dynamic sign up form</li>
                <li>Animated SVG's using gsap.js</li>
                <li>100% custom illustrations</li>
                <li>Animated </li>
            </ul>

        </div>
        <div class="col-6">
            <figure>
                <img src="../assets/portfolio/box.png" alt="" class="mb-3" @load="$emit('imgRdy')">
            </figure>
            <figure>
                <img src="../assets/portfolio/gauge.jpg" alt="" class="mb-3" @load="$emit('imgRdy')">
            </figure>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "projectQB",
};
</script>
