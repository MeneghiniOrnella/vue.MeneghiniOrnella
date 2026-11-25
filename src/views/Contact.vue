<template>
    <section class="contact">
        <h3>{{ $t('hContact') }}</h3>
        <p>{{ $t('pContact1') }}</p>
        <div class="cards-group">
            <div class="card" v-for="item in filteredContacts" :key="item.id">
                <h4>
                    <a :href="item.url" target="_blank" rel="noopener"
                        :aria-label="$t(`contacts.${item.id}.arialabel`)">
                        {{ item.label }} <br />
                        <span>{{ $t(`contacts.${item.id}.text`) }}</span>
                    </a>
                </h4>
            </div>
        </div>
    </section>
    <!-- 
    https://codepen.io/Abobakr/pen/NRRNbZ
    https://codepen.io/davidkpiano/pen/ZpRXGj
    https://anuraghazra.dev
    https://www.cassie.codes
    https://codepen.io/smashingmag/pen/MWGJNaw
-->
</template>

<script setup>
import { computed } from "vue"
import { contacts } from "@/data/contacts";

const ids = ["email", "linkedin", "github", "codepen"];

const filteredContacts = computed(() =>
    contacts.filter(contact => ids.includes(contact.id))
);
</script>
