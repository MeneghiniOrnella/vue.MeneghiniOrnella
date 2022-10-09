<template>
  <nav>
    <router-link to="/" class="nav">Home</router-link>
    <router-link to="/resume" class="nav">Resume</router-link>
    <router-link to="/contact" class="nav">Contact</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* nav {
  padding: 30px;
} */

/* nav a {
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
