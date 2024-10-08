<template>
    <div class="work">
        <h3>{{ $t('hWork') }}</h3>
        <div class="cards-group">
            <div class="card" v-for="{ title, place, start, end, otherInfo } in works" :key="works">
                <h4>{{ title }}</h4>
                <b class="place">{{ place }}</b>
                <p>{{ start }} - {{ end }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import data from "@/data/dataEN/work.json";

export default {
    name: 'Work',
    props: {
        msg: String
    },
    computed: {
        works() {
            return data.map((work) => work)
        }
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

