<template>
<figure ref="portfoliovideo" class="portfolio-video">
    <div>
        <div ref="wrapper" class="portfolio-video__img">
            <div class="vimeo-container">
                <iframe class="frame" :src="'https://player.vimeo.com/video/'+videoLink" muted="false" frameborder="0" allow="fullscreen" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</figure>
</template>

<script>
import { gsap } from "gsap";

export default {
    props: ['videoLink'],
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
            const videoWrapper = this.$refs['wrapper']

            const delay = Math.floor(Math.random() * 1) + 0.5
            gsap.fromTo(videoWrapper, { width: 0, autoAlpha: 0, x: 100 }, { delay: delay, duration: 0.2, autoAlpha: 1, width: '100%', x: 0 })
            gsap.fromTo('.frame', { autoAlpha: 0 }, {
                autoAlpha: 0.8,
                delay: delay + 0.3,
                onStart: (() => {
                    this.$refs['portfoliovideo'].classList.add('openFlicker')
                })
            })

            //this.$emit('videoLoaded')

        }
    },

}
</script>

<style lang="scss" scoped>
.portfolio-video {
    margin-bottom: 2em;

    figcaption {
        background-color: rgba(255, 255, 255, 0.1);
        padding: 0.5em;
        width: 66%;
        margin-top: 1em;
        font-size: 14px;
        line-height: 19px;
    }

    &__img {

        iframe {
            visibility: hidden;
            border: none;
            width: 100%;
            min-height: 237px;
            opacity: 0.5;
            padding: 1em 0;

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
