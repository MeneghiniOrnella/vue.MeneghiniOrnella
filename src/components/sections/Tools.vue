<template>
	<section class="tools">
		<h3>{{ $t("hTools") }}</h3>
		<div class="tools-group">
			<div v-for="tool in tools" class="tool">
				<img :src="`/tools/${tool.img}`" :alt="tool.title" :title="tool.title" class="tool-img" />
			</div>
		</div>
	</section>
</template>

<script setup>
import tools from "@/data/tools.json";
</script>
