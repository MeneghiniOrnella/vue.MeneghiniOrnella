<template>
    <section class="projects">
        <h3>Projects</h3>
        <div class="cards-group">
            <div class="card" v-for="project in projects" :key="project">
                <h4 class="title">{{ project.title }}</h4>
                <!-- <img :src="getImgSrc(project.img)" :title="project.title" :alt="project.title" /> -->
                <p class="otherInfo">{{ project.description }}</p>
                <div class="projectBtns">
                    <a target="_blank" :href="project.urlGithub"
                        aria-label="Go to Github this repository in a new window">GitHub</a>
                    <a target="_blank" :href="project.urlSite" aria-label="Go to site in a new window"
                        :class="{ inactive: project.urlSite === '' }">Site</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import data from "@/data/projects.json";


export default {
    name: 'Projects',
    computed: {
        projects() {
            return data.map((project) => {
                return project;
            })
        }
    }
}
</script>

<style scoped>
.projects img {
    width: 20em;
    height: 10em;
}

.projectBtns {
    display: flex;
    flex-direction: row;
}

.inactive {
    display: none;
}
</style>
