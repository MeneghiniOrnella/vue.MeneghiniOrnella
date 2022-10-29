<template>
  <nav id="app">
    <div>
      <!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->
      <!-- <p>Ornella Meneghini</p> -->
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

/* nav {
  padding: 30px;
} 
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
} */

nav {
  display: flex;
  flex-direction: row;
}
.nav {
  margin: 1em 0.5em;
}
</style>
