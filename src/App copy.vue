<template>
    
    <main class="app-content">
        <router-view />
    </main>
    <Footer />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Footer from '@/components/sections/Footer.vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const routes = [
    { name: 'Home', path: '/', fa: 'fa-solid fa-house', aria: 'Go to home section' },
    { name: 'Resume', path: '/resume', fa: 'fa-solid fa-briefcase', aria: 'Go to resume section' },
    { name: 'Contact', path: '/contact', fa: 'fa-solid fa-message', aria: 'Go to contact section' }
]

const route = useRoute()
const { locale, t } = useI18n()

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
    isMenuOpen.value = false
}

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
}

const toggleLanguage = () => {
    locale.value = locale.value === 'en' ? 'es' : 'en'
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})

watch(
    () => route.path,
    () => closeMenu()
)
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;   /* MISMO VALOR */
  z-index: 1000;
}
.app-content {
  padding-top: 80px;
}
nav {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
    text-align: left;
}

nav.scrolled {
    background-color: rgba(0, 0, 0, 0.2);
}

.burger {
    display: none;
    background: transparent;
    border: none;
}

.view {
    padding-top: 70px;
}

@media (max-width: 768px) {
    .icons-group {
        position: absolute;
        top: 50px;
        right: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(197, 225, 254, 0.8);
        transform: translateX(100%);
    }

    .is-active {
        transform: translateX(0);
    }

    .burger {
        display: inline-block;
    }
}
</style>
