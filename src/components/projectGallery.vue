<template>
<div class="porfolioWindow__inner ">
    <div class="col-12 pb-3 px-0 active">
        <div class="d-lg-none">
            <h1 class="mb-5">GALLERY</h1>
        </div>
    </div>
    <div class="row no-guters">
        <div class="col-12">
            <ul class="aniBars">
                <li class="d-none d-sm-block"><strong >Tools:</strong><span>Illustrator, Photoshop, Cinema 4D, Adobe draw</span></li>
                <li class="d-block d-sm-none"><strong >Tools:</strong><span>Illustrator, Photoshop, </span></li>
                <li class="d-block d-sm-none"><span class="pl-2">Cinema 4D, Adobe draw</span></li>
            </ul>
            <p>Although 99.9% of the work I've done over the previous years has been purely web development, I still keep a library of design and illustrations that have either been for clients or personal work. I'm always open to offers to do more creative projects but this is no longer my primary focus.</p>
        </div>
    </div>
    <div class="row pt-3">
        <div class="col-6 mb-3 ">
            <figure><img src="../assets/portfolio/genesh.jpg" @load="$emit('imgRdy')">
            </figure>
        </div>
        <div class="col-6 mb-3">
            <figure><img src="../assets/portfolio/soundmind.jpg" @load="$emit('imgRdy')">
            </figure>
        </div>
        <div class="col-12 mb-3">
            <figure><img src="../assets/portfolio/rob.jpg" @load="$emit('imgRdy')">
            </figure>
        </div>
        <div class="col-12 mb-4">
            <figure><img src="../assets/portfolio/monsters-2.jpg" @load="$emit('imgRdy')">
            </figure>
        </div>
        <div class="col-6 mb-6">
            <figure><img src="../assets/portfolio/kitty.jpg" @load="$emit('imgRdy')">
            </figure>
        </div>
        <div class="col-6 mb-6">
            <figure><img src="../assets/portfolio/skull.jpg" @load="$emit('imgRdy')">
            </figure>
        </div>
        <div class="col-6">
            <figure><img src="../assets/portfolio/monkey.jpg" @load="$emit('imgRdy')">
            </figure>
        </div>
        <div class="col-6">
            <figure><img src="../assets/portfolio/yolo.jpg" @load="$emit('imgRdy')">
            </figure>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: "projectGallery",
    data: function () {
        return {
        };
    },
};
</script>
<style scoped>
img {
    padding: 0;
    border: 0;
    max-width: 100%;
}
</style>
