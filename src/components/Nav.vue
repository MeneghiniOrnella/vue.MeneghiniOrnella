<template>
    <nav class="nav">
        <ul>
            <li v-for="route in routes" :key="route.path">
                <router-link :to="route.to">
                {{ t(route.name) }}
                </router-link>
            </li>
        </ul>
        <button @click="toggleLanguage">
            {{ locale === 'en' ? 'ES' : 'EN' }}
        </button>
    </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { navigation } from '@/config/navigation'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const routes = navigation

const { locale, t } = useI18n()

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
    isMenuOpen.value = false
}

const toggleLanguage = () => {
    locale.value = locale.value === 'en' ? 'es' : 'en'
}

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})

onBeforeRouteUpdate(() => {
    closeMenu()
})
</script>
