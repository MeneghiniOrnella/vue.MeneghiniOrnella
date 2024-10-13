<template>
    <div class="banner">
        <h1>Ornella Meneghini</h1>
        <h2>Web Developer</h2>
        <BannerBtn />
    </div>
</template>

<script>
import BannerBtn from '../BannerBtn.vue';

export default {
    name: 'Banner', 
    components: {
        BannerBtn,
    }
}
</script>

<style>
.banner {
    margin-top: 2rem;
    padding: 3em 0;
    background: rgb(197, 225, 254);
    background: linear-gradient(0deg, rgba(197, 225, 254, 0.2049194677871149) 0%, rgba(150, 72, 170, 0.804359243697479) 51%, rgba(197, 225, 254, 0.19931722689075626) 100%);
    /* background: #9e1c1c url('@/assets/projects/dog.jpg') no-repeat center center fixed; */
    /* color: #9648aacd */
}
</style>