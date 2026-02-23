<template>
    <!-- <section class="resume">
        <button v-for="tab in tabs" :key="tab" @click="selected = tab;" :class="['tab-btn', { active: selected === tab }]">
            {{ tab.label }}
        </button>
        <component :is="selected.component" class="tab" />
    </section> -->
    <TimelineSection
        :items="works"
        i18nBase="works"
        titleKey="hWork"
        sectionClass="work"
        />
    <TimelineSection
        :items="educations"
        i18nBase="educations"
        titleKey="hEducation"
        sectionClass="education"
        />
    <Language />
</template>

<script setup>
import Language from "@/components/sections/Language.vue"
import TimelineSection from "@/components/TemplateCardGroups.vue"
import { works } from '@/data/works'
import { educations } from '@/data/educations'
</script>

<style>
.resume {
    margin-top: 5rem;
}

.tab-btn {
    display: inline-block;
    flex-direction: row;
    padding: 6px 10px;
    cursor: pointer;
    border: none;
    outline: none;
    font-size: 1em;
    margin: 1em 0.5em;
}

.active {
    border-bottom: 5px solid rgb(195, 0, 195);
}
</style>