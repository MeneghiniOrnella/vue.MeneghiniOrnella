<template>
    <section class="education">
        <h3>{{ $t('hEducation') }}</h3>
        <div class="cards-group">
            <article 
                class="card" 
                v-for="(education) in visibleEducations"
                :key="education.id"
            >
                <h4>{{ $t(`educations.${education.id}.title`) }}</h4>
                <b class="place">{{ $t(`educations.${education.id}.place`) }}</b>
                <p>{{ education.start }} - {{ education.end }}
                    <br>
                    <span class="educationState">
                        {{ $t(`educations.${education.id}.state`) }}
                        <br>    
                        {{ education.otherInfo }}
                    </span>
                </p>
            </article>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { educations } from '@/data/educations.js'

const { t } = useI18n({ useScope: 'global' })

const visibleEducations = computed(() =>
    educations.filter(education => education.active !== false)
)
</script>

<style scoped>
.educationState {
    text-transform: uppercase;
}
</style>
