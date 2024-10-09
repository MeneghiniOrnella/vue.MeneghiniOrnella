<template>
    <section class="languages">
        <h3>{{ $t('hLanguages') }}</h3>
        <div class="cards-group">
            <div v-for="(language, index) in languages" :key="index" class="card">
                <h4>{{ $t(`languages[${index}].h1`) }}</h4>
                <p>{{ $t(`languages[${index}].p1`) }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Language',
    data() {
        return {
            languages: [
                { code: 'en' },
                { code: 'es' },
            ]
        };
    }
}
</script>
