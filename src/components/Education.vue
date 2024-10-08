<template>
    <div class="education">
        <h3>Education</h3>
        <div class="cards-group">
            <div class="card" v-for="education in educations" :key="educations">
                <h4>{{ education.title }}</h4>
                <b class="place">{{ education.place }}</b>
                <p>{{ education.start }} - {{ education.end }} <span class="educationState">| {{ education.state }} | {{
                        education.otherInfo }}</span></p>
            </div>
        </div>
    </div>
</template>

<script>
import data from "@/data/dataEN/education.json";

export default {
    name: 'Education',
    computed: {
        educations() {
            return data.map((education) => education)
        }
    }
}
</script>

<style scoped>
.educationState {
    text-transform: uppercase;
}
</style>
