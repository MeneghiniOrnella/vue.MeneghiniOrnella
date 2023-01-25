<template>
  <div class="home">
    <Header />
    <About />
    <!-- <Hour /> -->
    <Tools />
    <Projects />
    <!-- <GithubInfo /> -->
    <Footer />
  </div>
</template>

<script>
import Header     from "@/components/sections/Banner.vue";
import About      from '@/components/About.vue';
import Hour       from '@/components/Hour.vue';
import Tools      from '@/components/Tools.vue';
import Projects   from '@/components/Projects.vue';
import GithubInfo from '@/components/GithubInfo.vue'
import Footer     from '@/components/sections/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
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