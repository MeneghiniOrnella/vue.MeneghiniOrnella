<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <About />
    <Tools />
    <Projects />
    <!-- <HelloWorld msg="Ornella"/> -->
  </div>
</template>

<script>
/* import HelloWorld from '@/components/HelloWorld.vue'; */
import About from '@/components/About.vue';
import Tools from '@/components/Tools.vue';
import Projects from '@/components/Projects.vue';

export default {
  name: 'HomeView',
  components: {
    /* HelloWorld, */
    About,
    Tools,
    Projects
}
}
</script>
