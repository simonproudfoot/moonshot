<template>
<div class="porfolioWindow__inner">
    <div class="row">
        <div class="col-6 pb-2">
            <portfolioTitle :title="'Manchester International Festival'" :id="34532" :caption="`For over three years I worked as the in-house developer for the Manchester International Festival. A bi-annual festival featuring performances from artists such as Idris Elba, Skepta, Janelle Monáe, David Lynch and Yoko Ono. Here I was solely responsible for the build and upkeep of the festivals' websites. Including the main site which is used by millions of users each year to book tickets, volunteer, get involved with year-round community projects and more.`" />
            <portfolioImage :imageUlr="'qb.jpg'" :imageAlt="'Quickblocs design'" :caption="'Commig soon'" :id="15435" />
        </div>
        <div class="col-6 pb-2">
            <portfolioImage :imageUlr="'qb.jpg'" :imageAlt="'Quickblocs design'" :caption="'Commig sooner than fdsfds'" :id="23453" />
        </div>
    </div>
</div>
</template>
<script>
import portfolioImage from './portfolioImage.vue';
import portfolioTitle from './portfolioTitle.vue';
export default {
    components: { portfolioImage, portfolioTitle },
    name: "projectQB",
};
</script>
