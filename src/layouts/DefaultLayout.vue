<template>
  <Nav />
  <main class="app-content">
    <router-view />
  </main>
  <Footer />
</template>

<script setup>
import Nav from "@/components/layout/Nav.vue";
import Footer from "@/components/layout/Footer.vue";
</script>
