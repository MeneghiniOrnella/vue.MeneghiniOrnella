<template>
    <div class="work">
        <h3>{{ $t('hWork') }}</h3>
        <div class="cards-group">
            <div class="card" v-for="(work, index) in works" :key="index">
                <h4>{{ $t(`works[${index}].title`) }}</h4>
                <b class="place">{{ $t(`works[${index}].place`) }}</b>
                <p>{{ $t(`works[${index}].start`) }} - {{ $t(`works[${index}].end`) }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Work',
    props: {
        msg: String
    },
    data() {
        return {
            works: [
                { code: 'en' },
                { code: 'es' },
            ]
        };
    }
}
</script>


<style scoped>
/* .card {
    width: 80%;
    padding: 0;
    justify-self: center;
    text-align: center;
    background-color: #ffffff;
    color: #000000;
} */
</style>

