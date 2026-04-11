<template>
  <div class="banner">
    <h1>Ornella Meneghini</h1>
    <h2>Web Developer</h2>
    <SocialLinks :ids="['email', 'linkedin', 'cv']" variant="banner" showLabel />
  </div>
</template>

<script setup>
import SocialLinks from "@/components/ui/SocialLinks.vue";
</script>
