<template>
<div class="porfolioWindow__inner px-3 px-md-3">
    <div class="row">
        <div class="col-12 col-sm-6 pb-2">
            <portfolioTitle :title="getProject.title" :id="332" :caption="getProject.content" :imageAlt="'MIF ticket booking'" />
            <portfolioImage v-for="(item, i) in leftCol" :key="i" v-on:imageLoaded="rockOn" :imageUlr="item.image" :imageAlt="'MIF ticket booking'" :caption="item.caption" :id="item.title" />
        </div>
        <div class="col-12 col-sm-6 pb-2">
            <portfolioVideo v-if="getProject.video" :videoLink="getProject.video" />
            <portfolioImage v-for="(item, i) in rightCol" :key="i" v-on:imageLoaded="rockOn" :imageUlr="item.image" :imageAlt="'MIF ticket booking'" :caption="item.caption" :id="item.title" />
        </div>
    </div>
</div>
</template>

<script>
import portfolioImage from './portfolioImage';
import portfolioTitle from './portfolioTitle';
import portfolioVideo from './portfolioVideo';
export default {
    name: "projectPage",
    props: ['projects', 'currentProject'],
    data() {
        return {
            isLoaded: false,
            count: 0,
        }
    },
    components: {
        portfolioImage,
        portfolioVideo,
        portfolioTitle
    },
    computed: {
        getProject() {
            return this.projects.find(x => x.id == this.currentProject)
        },
        leftCol() {
            return this.projects.find(x => x.id == this.currentProject).items.filter(x => x.side == 'left')
        },
        rightCol() {
            return this.projects.find(x => x.id == this.currentProject).items.filter(x => x.side == 'right')
        }
    },
    methods: {
        rockOn() {
            this.count++
            if (this.count == this.getProject.items.length) {
                setTimeout(() => {
                    this.$emit('imgRdy')
                }, 1500);
            }
        }
    }
};
</script>
