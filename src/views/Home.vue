<template>
	<div class="home">
		<!-- <Luna /> -->
		<Banner />
		<About />
		<Tools />
		<TimelineSection :items="projects" i18nBase="projects" titleKey="hProjects" sectionClass="project">
			<template #content="{ item }">
				<p class="description">
					{{ item.description }}
				</p>
				<div class="skills">
					<span v-for="skill in item.skills" :key="skill" class="skill"
						:style="{ backgroundColor: skillColors?.[skill] || '#e5e7eb' }">
						{{ skill }}
					</span>
				</div>
				<div class="btns-group">
					<a v-for="link in getProjectLinks(item)" :key="link.label" :href="link.url" target="_blank"
						class="btn">
						{{ link.label }}
					</a>
				</div>
			</template>
		</TimelineSection>
	</div>
</template>

<script setup>
import Banner from "@/components/sections/Banner.vue"
import About from '@/components/sections/About.vue'
import Tools from '@/components/sections/Tools.vue'
import TimelineSection from "@/components/ui/TemplateCardGroups.vue"
import { projects } from "@/data/projects"
import { skillColors } from "@/config/skillColors";
// import Luna from '@/components/Luna.vue'

const getProjectLinks = (item) => [
	{ label: "GitHub", url: item.urlGithub },
	{ label: "Demo", url: item.urlSite },
].filter(link => link.url)
</script>