<template>
    <!-- <section class="resume">
        <button v-for="tab in tabs" :key="tab" @click="selected = tab;" :class="['tab-btn', { active: selected === tab }]">
            {{ tab.label }}
        </button>
        <component :is="selected.component" class="tab" />
    </section> -->
    <Language />
</template>

<script setup>
// import Education from "@/components/Education.vue"
// import Work from "@/components/Work.vue"
import Language from "@/components/sections/Language.vue"

// const tabs = ["Work", "Education"]
// let selected = "Work"
// const tabs = [
//     { label: 'Work', component: Work },
//     { label: 'Education', component: Education }
// ]

// const selected = ref(tabs[0])
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