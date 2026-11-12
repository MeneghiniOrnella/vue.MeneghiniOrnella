<template>
	<section :class="sectionClass">
		<h3>{{ t(titleKey) }}</h3>
		<div class="cards-group">
			<article v-for="item in visibleItems" :key="item.id" class="card">
				<header>
					<h4>{{ t(`${i18nBase}.${item.id}.title`) }}</h4>
					<span v-if="item.place" class="place">{{ item.place }}</span>
				</header>
				<main>
					<p class="period">
						<time v-if="item.start && item.end">{{ item.start }} – {{ item.end }}</time>
					</p>
					<slot name="content" :item="item">
						<div v-if="item.skills?.length" class="skills">
							<span v-for="skill in item.skills" :key="skill" class="skill"
								:style="{ backgroundColor: skillColors?.[skill] || '#e5e7eb' }">
								{{ skill }}
							</span>
						</div>
						<div v-if="item.meta?.length" class="meta">
							<span v-for="(text, i) in item.meta" :key="i">{{ text }}</span>
						</div>
					</slot>
				</main>
			</article>
		</div>
	</section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { skillColors } from "@/config/skillColors";

const props = defineProps({
	items: { type: Array, required: true },
	i18nBase: { type: String, required: true },
	titleKey: { type: String, required: true },
	sectionClass: { type: String, default: "" },
});

const { t, te } = useI18n({ useScope: "global" });

const visibleItems = computed(() =>
	props.items
		.filter((item) => item.active !== false)
		.map((item) => ({
			...item,
			meta: ["state", "otherInfo"]
				.map((key) =>
					te(`${props.i18nBase}.${item.id}.${key}`)
						? t(`${props.i18nBase}.${item.id}.${key}`)
						: null,
				)
				.filter(Boolean),
		})),
);
</script>
