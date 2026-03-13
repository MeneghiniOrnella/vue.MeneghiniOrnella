<template>
    <section class="resume">
        <div class="tabs">
            <button
                v-for="tab in tabs"
                :key="tab"
                @click="selected = tab"
                :class="['tab-btn', { active: selected === tab }]">
                {{ tab }}
            </button>
        </div>
        <div class="tab-content">
            <TimelineSection
                v-if="selected === 'Work'"
                :items="works"
                i18nBase="works"
                titleKey="hWork"
                sectionClass="work"
                />
            <TimelineSection
                v-if="selected === 'Education'"
                :items="educations"
                i18nBase="educations"
                titleKey="hEducation"
                sectionClass="education"
                />
        </div>
    </section>
    <Language />
</template>

<script setup>
import { ref } from "vue"
import Language from "@/components/sections/Language.vue"
import TimelineSection from "@/components/TemplateCardGroups.vue"
import { works } from '@/data/works'
import { educations } from '@/data/educations'

const tabs = ["Work", "Education"]

const selected = ref("Work")
</script>

<style>
.resume {
    margin-top: 5rem;
}

.tabs {
    display: flex;
    gap: .5rem;
}

.tab-btn {
    padding: 6px 10px;
    cursor: pointer;
    border: none;
    background: transparent;
    font-size: 1em;
}

.tab-btn.active {
    border-bottom: 5px solid rgb(195, 0, 195);
    font-weight: 600;
}
</style>