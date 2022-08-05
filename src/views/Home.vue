<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <About />
    <Tools />
    <!-- <HelloWorld msg="Ornella"/> -->
  </div>
</template>

<script>
/* import HelloWorld from '@/components/HelloWorld.vue'; */
import About from '@/components/About.vue';
import Tools from '@/components/Tools.vue';

export default {
  name: 'HomeView',
  components: {
    /* HelloWorld, */
    About,
    Tools
}
}
</script>
