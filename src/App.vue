<template>
    <header>
        <nav id="app" class="icons-group">
            <div>
                <router-link to="/" class="favicon nav" aria-label="Go to home view">
                    <img src="@/../public/favicon/favicon-32x32.png" alt="OM">
                </router-link>
                <router-link to="/" class="nav" aria-label="Go to home view">
                    <font-awesome-icon icon="fa-solid fa-house" /> {{ $t('Home') }}
                </router-link>
                <router-link to="/resume" class="nav" aria-label="Go to resume view">
                    <font-awesome-icon icon="fa-solid fa-briefcase" /> {{ $t('Resume') }}
                </router-link>
                <router-link to="/contact" class="nav" aria-label="Go to contact view">
                    <font-awesome-icon icon="fa-solid fa-message" /> {{ $t('contactBtn') }}
                </router-link>
                <a href="https://drive.google.com/file/d/1lpqaTZXPFQF9jfN1VNM_Pmrk7gIlgYsy/view?usp=sharing" class="nav"
                aria-label="Go to Curriculum Vitae in PDF" target="_blank">
                    <font-awesome-icon icon="fa-solid fa-file-pdf" /> CV
                </a>
                <button @click="toggleLanguage">
                    <font-awesome-icon icon="fa-solid fa-language" /> {{ $t('languageBtn') }}
                </button>
            </div>
        </nav>
        <router-view />
    </header>
    <Footer />
</template>

<script>
import Footer from './components/sections/Footer.vue';

export default {
    name: 'App',
    components: {
        Footer
    },
    methods: {
        toggleLanguage() {
            const currentLocale = this.$i18n.locale;
            this.$i18n.locale = currentLocale === "en" ? "es" : "en";
        }
    },
}
</script>
