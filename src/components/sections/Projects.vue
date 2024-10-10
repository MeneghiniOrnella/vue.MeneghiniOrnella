<template>
    <section class="projects">
        <h3>{{ $t('hProjects') }}</h3>
        <div class="cards-group">
            <div class="card" v-for="(project, index) in projects" :key="index">
                <h4 class="title">{{ $t(`projects[${index}].title`) }}</h4>
                <!-- <img :src="getImgSrc(project.img)" :title="project.title" :alt="project.title" /> -->
                <p class="otherInfo">{{ $t(`projects[${index}].description`) }}</p>
                <div class="skills">
                    <ul v-for="(skill, itemIndex) in project.skills" :key="itemIndex">
                        <li :style="{ 'background-color': this.colors[skill] }">{{ skill }}</li>
                    </ul>
                </div>
                
                <div class="projectBtns">
                    <a target="_blank" :href="project.urlGithub"
                        aria-label="Go to Github this repository in a new window">GitHub</a>
                    <a target="_blank" :href="project.urlSite" aria-label="Go to site in a new window"
                        :class="{ inactive: project.urlSite === '' }">{{ $t('siteBtn') }}</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import data from '@/data/i18n/en.json';

export default {
    name: 'Projects',
    data() {
        return {
            projects: [],
            colors: {
                "Javascript": "#f9e79f",
                "HTML": "#f5b7b1",
                "SASS": "#d7bde2",
                "ReactJs": "#aed6f1",
                "CSS": "#a9cce3",
                "NodeJs": "#a9dfbf",
                "TailwindCSS": "#a9cce3",
                "API": "#f7dc6f",
                "Vue.Js": "#a2d9ce",
                "Python": "#85c1e9",
                "Flask": "#c39bd3",
                "MySQL": "#a9cce3",
                "Bootstrap": "#d2b4de",
                "Axios": "#cfd8dc",
                "Pinia": "#f9e79f",
                "Papa Parse 5": "#85c1e9",
                "Vue-ChartJs": "#f5b7b1"
            }
        }
    },
    created() {
        this.projects = data.projects;
    },
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

.skills {
    margin-bottom: 2rem;
}

ul {
    list-style: none;
    display: inline-block;
    margin: .1rem;
    padding: .1rem;
}

li {
    margin: .2rem 0;
    padding: .4rem;
    background-color: beige;
    border-radius: 6px;
    font-size: .8rem;
}
</style>
