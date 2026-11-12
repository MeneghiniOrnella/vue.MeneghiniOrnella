<template>
	<nav class="nav">
		<router-link v-for="route in routes" :key="route.to" :to="route.to" class="nav-item">
			{{ t(route.name) }}
		</router-link>
		<div class="btns-group">
			<button class="nav-action" @click="toggleLanguage">
				{{ locale === 'en' ? 'ES' : 'EN' }}
			</button>
			<button class="nav-action" @click="toggleTheme">
				{{ theme === 'light' ? '🌙' : '☀️' }}
			</button>
		</div>
	</nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { navigation } from '@/config/navigation'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const theme = ref('light')

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

const applyTheme = (value) => {
	if (value === 'dark') {
		document.documentElement.setAttribute('data-theme', 'dark')
	} else {
		document.documentElement.removeAttribute('data-theme')
	}
}

const toggleTheme = () => {
	theme.value = theme.value === 'light' ? 'dark' : 'light'
	localStorage.setItem('theme', theme.value)
	applyTheme(theme.value)
}

onMounted(() => {
	const saved = localStorage.getItem('theme')

	if (saved) {
		theme.value = saved
	} else {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
		theme.value = prefersDark ? 'dark' : 'light'
	}

	applyTheme(theme.value)
})


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
