<template>
<figure :ref="'wrapper-'+id" class="portfolio-title mb-5">
    <div class="portfolio-title__inner">
        <h1 :ref="'title-'+id" class=" h2" v-html="title"></h1>
        <p :ref="'caption-'+id" v-html="caption"></p>
    
          
    </div>
</figure>
</template>

<script>
import { gsap } from "gsap";
export default {
    props: ['title', 'caption', 'id'],
 
    mounted() {

        const imageWrapper = this.$refs['wrapper-' + this.id]
        const title = this.$refs['title-' + this.id]
        const caption = this.$refs['caption-' + this.id]
        const delay = 0.2

        gsap.set(caption, { autoAlpha: 0 })
        gsap.set(title, { autoAlpha: 0 })
        gsap.fromTo(imageWrapper, { width: 0, autoAlpha: 0, x: 100 }, {
            delay: delay,
            duration: 0.4,
            autoAlpha: 1,
            width: '100%',
            x: 0,
            onComplete: (() => {
                gsap.to(caption, { autoAlpha: 1, delay: 0.1 })
                gsap.to(title, { autoAlpha: 1, })
                wrapper.classList.add('openFlicker')
            })
        })

    }
}
</script>

<style lang="scss" scoped>
.portfolio-title {
    &__inner {
        display: block;
        padding: 1em 1em;

        p {
            opacity: 0;
        }

        h1 {
            margin-left: 0;
            text-transform: uppercase;
            line-height: 37px;
            display: block;
        }
    }

    width: 100%;
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
</style>
