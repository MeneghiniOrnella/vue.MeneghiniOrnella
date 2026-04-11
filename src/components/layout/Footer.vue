<template>
  <div class="footer">
    <hr />
    <div class="last-line">
      <a class="copy" :href="homeLink.url" :aria-label="homeLink.label">
        {{ homeLink.name }} &copy; {{ year }}
      </a>
      <SocialLinks :ids="['email', 'linkedin', 'github']" variant="footer" />
    </div>
  </div>
</template>

<script setup>
import SocialLinks from "@/components/ui/SocialLinks.vue";

const year = new Date().getFullYear();
const homeLink = {
  url: "https://meneghiniornella.netlify.app/",
  label: "Go to home",
  name: "Ornella Meneghini"
};
</script>
