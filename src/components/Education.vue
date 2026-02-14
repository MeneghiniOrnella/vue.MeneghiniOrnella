<template>
    <!-- <div class="education">
        <h3>{{ $t('hEducation') }}</h3>
        <div class="cards-group">
            <div class="card" v-for="(education, index) in educations" :key="index">
                <h4>{{ $t(`educations[${index}].title`) }}</h4>
                <b class="place">{{ $t(`educations[${index}].place`) }}</b>
                <p>{{ $t(`educations[${index}].start`) }} - {{ $t(`educations[${index}].end`) }} <span class="educationState">| {{ $t(`educations[${index}].state`) }} | {{ $t(`educations[${index}].otherInfo`) }}</span></p>
            </div>
        </div>
    </div> -->
    <h1>educacion</h1>
</template>

<script setup>
import data from '@/data/i18n/en.json'

const educations = data.educations
</script>

<style scoped>
.educationState {
    text-transform: uppercase;
}
</style>
