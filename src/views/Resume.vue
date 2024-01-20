<template>
    <section>
        <button v-for="tab in tabs" :key="tab" @click="selected = tab;" :class="['tab-btn', { active: selected === tab }]">
            {{ tab }}
        </button>
        <component :is="selected" class="tab" />
    </section>
    <Language />
    <Footer />
</template>

<script>
import Education from "@/components/Education";
import Work from "@/components/Work";
import Language from "@/components/sections/Language.vue";
import Footer from "@/components/sections/Footer.vue";

export default {
    data: function () {
        return {
            tabs: ["Work", "Education"],
            selected: "Work"
        };
    },
    components: {
        Work,
        Education,
        Language,
        Footer
    }
};
</script>

<style>
.tab-btn {
    display: inline-block;
    flex-direction: row;
    padding: 6px 10px;
    cursor: pointer;
    margin-bottom: 1rem;
    border: none;
    outline: none;
    font-size: 1em;
    margin: 1em 0.5em;
}

.active {
    border-bottom: 5px solid rgb(195, 0, 195);
}
</style>