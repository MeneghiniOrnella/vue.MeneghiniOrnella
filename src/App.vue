<template>
  <header>
    <nav id="app" class="icons-group">
      <div>
        <router-link to="/" class="favicon nav">
          <img src="@/../public/favicon/favicon-32x32.png" alt="OM">
        </router-link>
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
  </header>
</template>

<script>
export default {
    name: 'App'
}
</script>
