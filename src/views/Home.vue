<template>
  <div class="home">
    <h1>Ornella Meneghini</h1>
    <h2>Full Stack Developer</h2>
    <About />
    <Tools />
    <Projects />
    <GithubInfo />
    <Footer />
  </div>
</template>

<script>
import About from '@/components/About.vue';
import Tools from '@/components/Tools.vue';
import Projects from '@/components/Projects.vue';
import GithubInfo from '@/components/GithubInfo.vue'
import Footer from '@/components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    About,
    Tools,
    Projects,
    GithubInfo,
    Footer
  }
}
</script>
