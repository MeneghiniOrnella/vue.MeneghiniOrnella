<template>
  <div>
    <a href="#" class="favicon">
      <img src="@/../public/favicon/favicon-32x32.png" alt="OM">
    </a>
  </div>
  <nav id="app" class="icons-group">
    <div>
      <router-link to="/" class="nav">
        <font-awesome-icon icon="fa-solid fa-house" /> Home
      </router-link>
      <router-link to="/resume" class="nav">
        <font-awesome-icon icon="fa-solid fa-briefcase" /> Resume
      </router-link>
      <router-link to="/contact" class="nav">
        <font-awesome-icon icon="fa-solid fa-message" /> Contact
      </router-link>
      <router-link to="/resume" class="nav">
        <font-awesome-icon icon="fa-solid fa-command" />
      </router-link>
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
.favicon {
    background: none;
}
</style>