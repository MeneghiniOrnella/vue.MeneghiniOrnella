<template>
  <section>
    <AboutBtn />
    <div class="about-text">
      <h3>About</h3>
      <p>In 2020, I decided to change the course of my career to a <b>Full Stack Developer</b>. I finished a degree in international trade because I had the objective and the perseverence to finish it. I am studying a technical degree. Currently, I learn different lenguages and information about the IT World.</p>
      <p>My objetive is becoming a complete professional programmer. That is why I always look for courses, videos and complementary texts which help me to grow up professionally in a constant way.</p>
    </div>
  </section>
  
</template>

<script>
import AboutBtn from '../AboutBtn.vue';

export default {
  name: 'About',
  components: {
    AboutBtn
  }
}
</script>