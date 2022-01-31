<template>
<div class="porfolioWindow__inner">
    <div class="row no-guers">
        <div class="col-12 pb-3 px-0 active">
            <div class="d-lg-none">
                <h1>MANCHESTER</h1>
                <h1>STREET</h1>
                <h1>POEM</h1>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6 pb-2 ">
            <figure>
                <img src="../assets/portfolio/stpoem3.jpg" alt="manchester street poem website" class="mb-3" @load="$emit('imgRdy')">
            </figure>
        </div>

        <div class="col-12 col-md-6 pb-2 px-0">
            <div class="browserWrap">
                <span class="browserWrap__bar"></span>
                <img src="../assets/portfolio/poemvid.jpg" @click="$emit('openVid','255381266')">
                <span class="browserWrap__play"></span>
            </div>
        </div>
    </div>
    <p>

        Manchester Street Poem was an event that started in the 2017 festival and continues till today. Conceived by Karl Hyde and Rick Smith from the band Underworld, Manchester Street Poem tells the story's of Manchester's homeless in their own voice through music and art.
    </p>
    <ul class="aniBars">
        <li><strong >URL:</strong><span><a class="text-white" href="https://mcrstreetpoem.com/">mcrstreetpoem.com</a></span></li>
        <li><strong >Server side:</strong><span>Wordpress</span></li>
        <li><strong >Front end:</strong>jQuery</li>
    </ul>
    <figure>
        <img src="../assets/portfolio/stpoem.jpg" alt="manchester street poem website" class="mb-3" @load="$emit('imgRdy')">
    </figure>
    <p class="mb-5">I was asked by MIF, and Underworld to create an online presence for the event. Being influenced by some of the interactive digital storytelling the New York Times had recently been publishing, I created a site that played audio recordings of the people sharing their stories of homelessness as the user scrolled down the page accompanied via images and a live video stream of Karl Hyde creating artwork on the walls of locations around the city.</p>
    <figure>
        <img src="../assets/portfolio/stpoem2.jpg" alt="manchester street poem website" class="mb-3" @load="$emit('imgRdy')">
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
