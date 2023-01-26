<template>
  <div class="home">
    <Banner />
    <About />
    <!-- <Hour /> -->
    <Tools />
    <Projects />
    <!-- <GithubInfo /> -->
    <Footer />
  </div>
</template>

<script>
import Banner     from "@/components/sections/Banner.vue";
import About      from '@/components/sections/About.vue';
import Hour       from '@/components/Hour.vue';
import Tools      from '@/components/sections/Tools.vue';
import Projects   from '@/components/sections/Projects.vue';
import GithubInfo from '@/components/GithubInfo.vue'
import Footer     from '@/components/sections/Footer.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    About,
    Hour,
    Tools,
    Projects,
    GithubInfo,
    Footer
  }
}
</script>

<style scoped>
h1 {
    /* font-size: 10vw; */
    font-size: 9rem;
}
h2 {
    /* font-size: 8vw; */
    font-size: 4rem;
}
</style>