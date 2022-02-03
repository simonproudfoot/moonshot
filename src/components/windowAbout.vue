<template>
<div class="row">
    <div class="row icons mb-5 mt-2 pb-5">
        <div class="col-12 mb-5">
            <div class="px-3">
                <p v-if="content" class="pt-5 pt-md-1 mb-5 d-inline-flex">
                    <span v-html="content.introTwo"></span>
                </p>
            </div>
        </div>
        <div v-for="(icon, i) in content.services" :key="i" class="col-6 col-sm-4 mb-4">
            <div class="service-icon text-center">
                <img :src="require(`../assets/SVG/Asset`+icon.icon+'.svg')">
                <p class="text-white title d-block mt-3" style="line-height: 19px">{{icon.title}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['content'],
    name: "windowAbout",
};
</script>

<style lang="scss">
.service-icon {
    // background-color: rgba(255, 255, 255, 0.2);
    height: 110px;
    width: 100%;

    img {
        height: 55px;
    }
}

.icons svg {
    fill: #fff;
    width: 30px;
    margin: auto;
    vertical-align: middle;
    display: inline-block;
}

.title {
    margin-left: 0.5em;
    vertical-align: middle;
    display: inline-block;
}
</style>
