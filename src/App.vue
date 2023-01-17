<template>
  <nav id="app" class="icons-group">
    <div>
      <router-link to="/" class="nav"><font-awesome-icon icon="fa-solid fa-house" /> Home</router-link>
      <router-link to="/resume" class="nav"><font-awesome-icon icon="fa-solid fa-briefcase" /> Resume</router-link>
      <router-link to="/contact" class="nav"><font-awesome-icon icon="fa-solid fa-message" /> Contact</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
