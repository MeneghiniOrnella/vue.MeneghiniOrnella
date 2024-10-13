<template>
    <nav :class="[{ scrolled: isScrolled }]">
        <ul :class="['icons-group', { 'is-active': isMenuOpen }]" role="menu">
            <!-- <router-link to="/" class="favicon" @click="closeMenu" aria-label="Go to home view">
                <img src="@/../public/favicon/favicon-32x32.png" alt="OM" />
            </router-link> -->
            <li v-for="(route, index) in routes" :key="index" role="menuitem">
                <router-link :to="route.path" class="nav-link" @click="closeMenu" :aria-label="route.aria">
                    <font-awesome-icon :icon="route.fa" /> {{ route.name }}
                </router-link>
            </li>
            <li>
                <a href="https://drive.google.com/file/d/1lpqaTZXPFQF9jfN1VNM_Pmrk7gIlgYsy/view?usp=sharing"
                    aria-label="Go to Curriculum Vitae PDF in other page" target="_blank">
                    <font-awesome-icon icon="fa-solid fa-file-pdf" /> CV
                </a>
            </li>
            <li>
                <button @click="toggleLanguage">
                    <font-awesome-icon icon="fa-solid fa-language" /> {{ $t('languageBtn') }}
                </button>
            </li>
        </ul>
        <button class="burger" @click="toggleMenu" aria-label="Toggle navigation" :aria-expanded="isMenuOpen">
            <img src="@/../public/favicon/favicon-32x32.png" alt="OM" />
            <!-- <font-awesome-icon icon="fa-solid fa-bars" class="burger" /> -->
        </button>
    </nav>
    <router-view />
    <Footer />
</template>

<script>
import Footer from './components/sections/Footer.vue';

export default {
    name: 'App',
    data() {
        return {
            isMenuOpen: false,
            isScrolled: false,
            routes: [
                { name: 'Home', path: '/', fa: 'fa-solid fa-house', aria: 'Go to home section' },
                { name: 'Resume', path: '/resume', fa: 'fa-solid fa-briefcase', aria: 'Go to resume section' },
                { name: 'Contact', path: '/contact', fa: 'fa-solid fa-message', aria: 'Go to contact section' }
            ]
        };
    },
    components: {
        Footer
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    watch: {
        '$route'(to, from) {
            if (to.path !== from.path) this.closeMenu();
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        },
        handleScroll() {
            this.isScrolled = window.scrollY > 50;
        },
        toggleLanguage() {
            const currentLocale = this.$i18n.locale;
            this.$i18n.locale = currentLocale === 'en' ? 'es' : 'en';
        }
    },
};
</script>

<style scoped>
nav {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
    text-align: left;
}

.favicon {
    margin: 0;
    background: none;
}

nav.scrolled {
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    width: 100%;
}

.burger {
    display: none;
    background: transparent;
    border: none;
}

.burger:active {
    color: #f4f8fa;
    background-color: #83239b;
}

@media (max-width: 768px) {
    .icons-group {
        position: absolute;
        top: 50px;
        right: 0;
        width: 100%;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(197, 225, 254, 0.3);
        transform: translateX(100%);
    }

    .is-active {
        transform: translateX(0);
    }

    .burger {
        display: inline-block;
    }

    nav.scrolled {
        background: none;
        border: none;
        box-shadow: none;
    }
}
</style>
