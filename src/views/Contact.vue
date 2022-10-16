<template>
  <div class="home">
    <h1>Contact me</h1>
    <p>Hi! Get in touch! You could send me a message on these pages, that contain more information about me and what I like to do.</p>
    <br/>
    <div class="cards-group">
      <div class="card">
        <a href="https://www.linkedin.com/in/meneghiniornella/" target="_blank">
        <p>LinkedIn: in/meneghiniornella</p>
      </a>
      </div>
      <div class="card">
        <p>Github: </p><a href="">GitHub</a>
      </div>
      <div class="card">
        <p>meneghini.ornella@gmail.com</p>
      </div>
    </div>
  </div>
<!-- 
  https://codepen.io/Abobakr/pen/NRRNbZ
  https://codepen.io/davidkpiano/pen/ZpRXGj
  https://anuraghazra.dev
  https://www.cassie.codes
  https://codepen.io/smashingmag/pen/MWGJNaw
-->

</template>

<script>

export default {
  name: 'HomeView',
}
</script>

<style scoped>
body {
  background-color: rgb(213, 70, 168);
  margin: 0;
  padding: 0;
}

.bear {
  background-color: beige;
  border-radius: 50%;
  height: 250px;
  width: 250px;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.bear:before {
  background-color: bisque;
  position: absolute;
  content: '';
  border-radius: 50%;
  height: 120px;
  width: 120px;
  top: 130px;
  left: 50px;
}
</style>
