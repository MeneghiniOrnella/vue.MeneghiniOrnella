<template>
    <section class="languages">
        <h3>{{ $t('languages.h') }}</h3>
        <div class="cards-group">
            <div class="card">
                <h4>{{ $t('languages.h1') }}</h4>
                <p>{{ $t('languages.p1') }}</p>
            </div>
            <div class="card">
                <h4>{{ $t('languages.h2') }}</h4>
                <p>{{ $t('languages.p2') }}</p>
            </div>
            <!-- <div v-for="(language, index) in translatedLanguages" :key="index" class="card">
                <h4>{{ language.h }}</h4>
                <p>{{ language.p }}</p>
            </div> -->
        </div>
    </section>
</template>

<script>
// export default {
//     computed: {
//         translatedLanguages() {
//             return this.$t('languages.languagesList');
//         }
//     },
//     mounted() {
//         console.log('Current locale:', this.$i18n.locale);
//         console.log('Loaded languages:', this.$t('languages.languagesList'));
//     }
// }
</script>