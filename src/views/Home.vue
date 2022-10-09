<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <About />
    <Tools />
    <Projects />
  </div>
</template>

<script>
import About from '@/components/About.vue';
import Tools from '@/components/Tools.vue';
import Projects from '@/components/Projects.vue';

export default {
  name: 'HomeView',
  components: {
    About,
    Tools,
    Projects
}
}
</script>
