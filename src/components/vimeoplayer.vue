<template>
<div class="lightbox">
    <div class="lightbox__inner">
        <svg @click="$emit('closeVid')" version="1.1" id="closeb"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 41.8 41.8" style="enable-background:new 0 0 41.8 41.8;" xml:space="preserve">
            <g id="circle" transform="translate(0, 0)">
                <ellipse transform="matrix(1 -4.136431e-03 4.136431e-03 1 -8.630285e-02 8.666051e-02)" class="st0 " cx="20.9" cy="20.9" rx="20.4" ry="20.4" />
            </g>
            <g id="x">
                <line class="st1" x1="13.7" y1="13.7" x2="28.2" y2="28.2" />
                <line class="st1" x1="28.2" y1="13.7" x2="13.7" y2="28.2" />
            </g>
        </svg>
        <vimeo-player ref="player" autoplay="true" :video-id="id" muted="true" loop="true" />
    </div>
</div>
</template>
<script>
export default {
    props: ["id"],
};
</script>
<style lang="scss">
.lightbox {
    position: fixed;
    top: 0;
    bottom: 0;
    display: block;
    max-width: 756px;
    height: 320px;
    margin: auto;
    left: 0;
    right: 0;
    z-index: 99999;
    animation: video 0.3s linear;
    @media (max-width: 576px) {
        width: 100%;
        height: 320px;
    }
    &__inner {
        margin-top: -3rem;
        position: relative;
        padding-bottom: 56.25%;
        /* 16:9 */
        height: 0;
        #closeb {
            position: absolute;
            top: -5em;
        }
        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
    @keyframes video {
        0% {
            transform: scale(0.8);
        }
        100% {
            transform: scale(1.0);
        }
    }
}
</style>
