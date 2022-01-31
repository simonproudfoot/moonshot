<template>
<div class="porfolioWindow__inner">
    <div class="row">
        <div class="col-12 pb-3 px-0 active">
            <div class="d-lg-none">
                <h1>MUSIC FOR A</h1>
                <h1 class="mb-5">BUSY CITY</h1>
            </div>
        </div>
        <div class="row no-guters">
            <div class="col-12 col-md-6 mb-5">
                <div class="browserWrap">
                    <span class="browserWrap__bar"></span>
                    <img src="../assets/portfolio/music1.jpg" @click="$emit('openVid','218760998')">
                    <span class="browserWrap__play"></span>
                </div>

            </div>
            <div class="col-12 col-md-6 mb-5">
                <div class="browserWrap">
                    <span class="browserWrap__bar"></span>
                    <img src="../assets/portfolio/musicvid.jpg" @click="$emit('openVid','234978971')">
                    <span class="browserWrap__play"></span>
                </div>
            </div>
            <div class="col-12">
                <ul class="aniBars">
                    <li><strong >Server side:</strong><span>PHP, WordPress, ACF</span></li>
                    <li><strong >Front end:</strong>jQuery, Google Maps API</li>
                </ul>

                <p>Music for a Busy City was a project that featured new music, from composers Anna Meredith, Matthew Herbert, Mohammed Fairouz, Huang Ruo, Olga Neuwirth, Philip Venables in various locations around the city.</p>
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col-12 col-md-8 mt-4 mb-5">
                <div class="browserWrap">
                    <span class="browserWrap__bar"></span>
                    <img src="../assets/portfolio/music2.jpg" @load="$emit('imgRdy')">
                </div>
            </div>
            <div class="col-12 col-md-4">
                <p>These recorded pieces played on rotation every hour. Audiences could use the interactive map to plan their journey and hear each one</p>
            </div>
            <div class="col-12 col-md-4">
                <p>By clicking on the locations, users would be transported to the location virtually allowing them to hear the music and be in the space they were created for using a VR headset or their phone.</p>
            </div>
            <div class="col-12 col-md-8 mb-5">
                <div class="browserWrap">
                    <span class="browserWrap__bar"></span>
                    <img src="../assets/portfolio/music4.jpg" @load="$emit('imgRdy')">
                </div>
            </div>

            <div class="col-12 col-md-12 mb-5">
                <div class="browserWrap">
                    <span class="browserWrap__bar"></span>
                    <img src="../assets/portfolio/music5.jpg" @load="$emit('imgRdy')">
                </div>
            </div>

            <div class="col-12 col-md-4">
                <p></p>
            </div>

        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
  name: "projectMif",
};
</script>
