<template>
    <div>
        hello
    </div>
</template>

<script>
import { TweenMax, TimelineMax, Power3 } from "gsap";
export default {
    data() {
        return {
            divAnimation: ''
        }
    },
    components: {
        TweenMax,
        TimelineMax
    },

}
</script>

<style lang="scss">
.portfolio-list {
    &__item {
        list-style: none;
        margin-bottom: 1.6em;
        .h1size {
            @media(min-width: 1000px) {
                line-height: 1em;
            }
            @media(max-width: 1000px) {
                font-size: 1.5rem;
            }
        }
        h4 {
            margin: 0;
        }
    }
}
</style>