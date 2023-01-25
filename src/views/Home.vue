<template>
  <div class="home">
    <h1>Ornella Meneghini</h1>
    <h2>Full Stack Developer</h2>
    <About />
    <!-- <Hour /> -->
    <Tools />
    <Projects />
    <!-- <GithubInfo /> -->
    <Footer />
  </div>
</template>

<script>
import About from '@/components/About.vue';
import Hour from '@/components/Hour.vue';
import Tools from '@/components/Tools.vue';
import Projects from '@/components/Projects.vue';
import GithubInfo from '@/components/GithubInfo.vue'
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
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