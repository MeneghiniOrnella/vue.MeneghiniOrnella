<template>
    <section class="work">
        <h3>{{ t('hWork') }}</h3>
        <div class="cards-group">
            <article
                v-for="work in visibleWorks"
                :key="work.id"
                class="card"
            >
                <h4>{{ t(`works.${work.id}.title`) }}</h4>
                <b class="place">{{ work.place }}</b>
                <p>{{ work.start }} – {{ work.end }}
                    <span>{{ t(`works.${work.id}.otherInfo`) }}</span>
                </p>
            </article>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { works } from '@/data/works'

const { t } = useI18n({ useScope: 'global' })

const visibleWorks = computed(() =>
    works.filter(work => work.active !== false)
)
</script>
