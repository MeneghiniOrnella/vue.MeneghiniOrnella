<template>
	<section class="resume">
		<div class="tabs">
			<button v-for="tab in tabs" :key="tab" @click="selected = tab"
				:class="['tab-btn', { active: selected === tab }]">
				{{ tab }}
			</button>
		</div>
		<div class="tab-content">
			<TimelineSection v-if="selected === '💼'" :items="works" i18nBase="works" titleKey="hWork"
				sectionClass="work" />
			<TimelineSection v-if="selected === '🎓'" :items="educations" i18nBase="educations" titleKey="hEducation"
				sectionClass="education" />
		</div>
		<Language />
	</section>
</template>

<script setup>
import { ref } from "vue"
import Language from "@/components/sections/Language.vue"
import TimelineSection from "@/components/ui/TemplateCardGroups.vue"
import { works } from '@/data/works'
import { educations } from "@/data/educations";

const tabs = ["💼", "🎓"];
const selected = ref("💼");
</script>
