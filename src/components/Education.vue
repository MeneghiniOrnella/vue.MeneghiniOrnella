<template>
    <div class="education">
        <h3>{{ $t('hEducation') }}</h3>
        <div class="cards-group">
            <div class="card" v-for="(education, index) in educations" :key="index">
                <h4>{{ $t(`educations[${index}].title`) }}</h4>
                <b class="place">{{ $t(`educations[${index}].place`) }}</b>
                <p>{{ $t(`educations[${index}].start`) }} - {{ $t(`educations[${index}].end`) }} <span class="educationState">| {{ $t(`educations[${index}].state`) }} | {{ $t(`educations[${index}].otherInfo`) }}</span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Education',
    data() {
        return {
            educations: [
                { code: 'en' },
                { code: 'es' },
            ]
        };
    }
}
</script>

<style scoped>
.educationState {
    text-transform: uppercase;
}
</style>
