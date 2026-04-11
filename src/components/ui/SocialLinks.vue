<template>
    <div :class="['btns-group', variant]">
        <a v-for="item in filteredContacts" :key="item.id" :href="item.url" target="_blank"
            :aria-label="t(item.ariaLabel)" class="btn">
            <font-awesome-icon v-if="item.icon" :icon="item.icon" />
            <span v-if="showLabel">{{ item.label }}</span>
        </a>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { contacts } from "@/data/contacts";
import { useI18n } from "vue-i18n";

const props = defineProps({
    ids: {
        type: Array,
        default: () => [],
    },
    showLabel: {
        type: Boolean,
        default: false,
    },
    variant: {
        type: String,
        default: "",
    },
});
const { t } = useI18n();
const filteredContacts = computed(() => props.ids.length ?
    contacts.filter(contact => props.ids.includes(contact.id)) : contacts);
</script>