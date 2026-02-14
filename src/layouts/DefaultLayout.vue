<template>
    <Nav />
    <main class="app-content">
        <router-view />
    </main>
    <Footer />
</template>

<script setup>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/sections/Footer.vue'
</script>

<style scoped>
.app-content {
    padding-top: 80px;
}
</style>
