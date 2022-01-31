<template>
<div class="porfolioWindow__inner">
    <div class="row">
        <div class="col-12 pb-3 px-0 active">
            <div class="d-lg-none">
                <h1>MANCHESTER</h1>
                <h1>INTERNATIONAL</h1>
                <h1 class="mb-5">FESTIVAL</h1>
            </div>
            <ul class="aniBars">
                <li><strong >URL:</strong><span><a class="text-white" href="https://mif.co.uk">MIF.CO.UK</a></span></li>
                <li class="d-none d-sm-block"><strong >Server side:</strong><span>PHP, WordPress, ACF, Laravel, Statamic, Spectrix API</span></li>
                <li class="d-block d-sm-none"><strong >Server side:</strong><span>PHP, WordPress, ACF, Laravel, </span></li>
                <li class="d-block d-sm-none"><span class="pl-2">Statamic, Spectrix API</span></li>
                <li><strong >Front end:</strong>jQuery, Vue.js, Gsap.js, Bootstrap</li>
            </ul>
        </div>
        <div class="col-12 pb-2 px-0">
            <p>For over three years I worked as the in-house developer for the Manchester International Festival. A bi-annual festival featuring performances from artists such as Idris Elba, Skepta, Janelle Monáe, David Lynch and Yoko Ono. Here I was solely
                responsible for the build and upkeep of the festivals' websites. Including the main site which is used by millions of users each year to book tickets, volunteer, get involved with year-round community projects
                and more.
            </p>
           
        </div>
        <div class="row no-guters">
            <div class="col-12 col-md-6">
                <figure class="pb-3">
                    <div class="browserWrap mb">
                        <img src="../assets/portfolio/mif19.png" @click="$emit('openVid','351615174')" @load="$emit('imgRdy')">
                        <figcaption>MIF19 Highlights</figcaption>
                        <span class="browserWrap__play"></span>
                    </div>
                </figure>
                <figure class="pb-3">
                    <img src="../assets/portfolio/mif-booking.jpg" alt="" class="perLeft" @load="$emit('imgRdy')">
                    <figcaption>Event info and ticket booking system Combining a custom WordPress backend with the Spektrix API.</figcaption>
                </figure>
                <figure class="pb-3">
                    <img src="../assets/portfolio/mif19-a.jpg" @load="$emit('imgRdy')">
                    <figcaption>2019 Pre-ticket release</figcaption>
                </figure>
            </div>
            <div class="col-12 col-md-6 ">
                <figure class="pb-3">
                    <div class="browserWrap mb">
                        <img src="../assets/portfolio/mif17.jpg" @click="$emit('openVid','218764464')" @load="$emit('imgRdy')">
                        <figcaption>2017 Event homepage</figcaption>
                        <span class="browserWrap__play"></span>
                    </div>
                </figure>
                <figure class="pb-3">
                    <img src="../assets/portfolio/mifhub.jpg" alt="" class="perLeft" @load="$emit('imgRdy')">
                    <figcaption>Design and build of internal web services such as social media intranet.</figcaption>
                </figure>
                <figure class="pb-3">
                    <img src="../assets/portfolio/mif.gif" @load="$emit('imgRdy')">
                    <figcaption>2019 Fesival square page</figcaption>
                </figure>
            </div>

            <div class="col-12">
                 <p style="font-weight:600">Tech stuff:</p>
            <p>Working on multiple projects each requiring functions such as: </p>
            <ul>
                <li>Secure, reactive data collection forms for recruitment, audience feedback, audience participation, volunteering, and more.</li>
                <li>Creating custom admin interfaces for large content teams to constantly upload content/media and a pagebuilder to give them the ability to change the page layouts.</li>
                <li>Creating a series of interactive 'mini-sites' for shows (see Music for A Busy City and Manchester street poem).</li>
                <li>Custom event management systems merging both Spektrix API and WordPress.</li>
                <li>Secure and custom login areas for artists to post content and job applicants to save their application process. </li>
                <li>Working closely with hosting providers to ensure performance during peak ticket releases. </li>
                <li>Internal web-based solutions to give employees access to internal documents, procedures and share idea's on discussion boards. </li>
            </ul>
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
