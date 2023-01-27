<template>
    <div class="banner">
        <h1>Ornella Meneghini</h1>
        <h2>Full Stack Developer</h2>
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