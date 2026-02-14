<template>
    <div class="work">
        <h3>{{ $t('hWork') }}</h3>
        <div class="cards-group">
            <div class="card" v-for="(work, index) in works" :key="index">
                <h4>{{ $t(`works[${index}].title`) }}</h4>
                <b class="place">{{ $t(`works[${index}].place`) }}</b>
                <p>{{ $t(`works[${index}].start`) }} - {{ $t(`works[${index}].end`) }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import data from '@/data/i18n/en.json'

defineProps({
    msg: String
})

const works = data.works.map(work => work)
</script>
