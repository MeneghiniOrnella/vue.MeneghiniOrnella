<template>
    <div class="icons-group contact-home">
        <a
            v-for="btn in btns"
            :key="btn.id"
            :href="btn.href"
            target="_blank"
            :aria-label="btn.ariaLabel"
        >
            <font-awesome-icon :icon="btn.icon" /> {{ btn.label }}
        </a>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const btns = [
    {
        id: 'email',
        href: 'https://mailto:meneghini.ornella@gmail.com',
        icon: 'fa-solid fa-envelope',
        label: 'Email',
        ariaLabel: t('emailBtnAriaLabel')
    },
    {
        id: 'linkedin',
        href: 'https://www.linkedin.com/in/meneghiniornella/?locale=en_US',
        icon: 'fa-brands fa-linkedin',
        label: 'LinkedIn',
        ariaLabel: t('linkedinBtnAriaLabel')
    },
    {
        id: 'cv',
        href: 'https://drive.google.com/file/d/1lpqaTZXPFQF9jfN1VNM_Pmrk7gIlgYsy/view?usp=sharing',
        icon: 'fa-solid fa-file-pdf',
        label: 'CV',
        ariaLabel: t('cvBtnAriaLabel')
    }
]
</script>