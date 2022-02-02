<template>
<figure ref="portfolioImage" class="portfolio-image">
    <div v-show="!isLoaded" class="loopFlicker text-center">LOADING...</div>
    <div v-show="isLoaded && imageUlr">
        <div :ref="'wrapper-'+id" class="portfolio-image__img">
            <img :ref="'img-'+id" class="portfolio-image__img__asset" :src="require(`../assets/portfolio/`+imageUlr)" :alt="imageAlt" v-on:load="onImgLoad">
            <!-- <div v-else class="vimeo-container">
                <iframe :src="'https://player.vimeo.com/video/'+videoLink" frameborder="0" allow="fullscreen" allowfullscreen></iframe>
            </div> -->
        </div>
        <figcaption v-if="caption" :ref="'caption-'+id" class="portfolio-image__caption">{{caption}}</figcaption>
    </div>
</figure>
</template>
<script>
import { gsap } from "gsap";
export default {
    props: ['imageUlr', 'imageAlt', 'videoLink', 'caption', 'id'],
    data() {
        return {
            isLoaded: false
        }
    },
    mounted() {
        this.videoLink ? this.onImgLoad() : null
    },
    methods: {
        onImgLoad() {
            this.$emit('imgRdy')
            this.isLoaded = true
            const imageWrapper = this.$refs['wrapper-' + this.id]
            const image = this.$refs['img-' + this.id]
            const caption = this.$refs['caption-' + this.id]
            const delay = Math.floor(Math.random() * 1) + 0.5
            gsap.fromTo(imageWrapper, { width: 0, autoAlpha: 0, x: 100 }, { delay: delay, duration: 0.2, autoAlpha: 1, width: '100%', x: 0 })
            gsap.fromTo(image, { autoAlpha: 0 }, {
                autoAlpha: 0.8,
                delay: delay + 0.3,
                onStart: (() => {
                    this.$refs['portfolioImage'].classList.add('openFlicker')
                })
            })
            gsap.fromTo(caption, { autoAlpha: 0, y: 20 }, { delay: delay + 0.3, duration: 0.2, autoAlpha: 1, y: 0 })
            this.$emit('imageLoaded')
        }
    },

}
</script>

<style lang="scss" scoped>
.portfolio-image {
    margin-bottom: 4em;

    figcaption {
        background-color: rgba(255, 255, 255, 0.1);
        padding: 0.5em;
        width: 66%;
        margin-top: 1em;
        font-size: 14px;
        line-height: 19px;
    }

    &__img {

        img {
            visibility: hidden;
            border: none;
            width: 100%;
            height: auto;
            opacity: 0.5;
        }

        display: block;
        position: relative;
        border: none;
        overflow: hidden;

        background: linear-gradient(to right, #434348 2px, transparent 1px) 0 0,
        linear-gradient(to right, #434348 2px, transparent 1px) 0 100%,
        linear-gradient(to left, #434348 2px, transparent 2px) 100% 0,
        linear-gradient(to left, #434348 2px, transparent 2px) 100% 100%,
        linear-gradient(to bottom, #434348 2px, transparent 2px) 0 0,
        linear-gradient(to bottom, #434348 2px, transparent 2px) 100% 0,
        linear-gradient(to top, #434348 2px, transparent 2px) 0 100%,
        linear-gradient(to top, #434348 2px, transparent 2px) 100% 100%;

        background-repeat: no-repeat;
        background-size: 20px 10px;

    }
}
</style>
