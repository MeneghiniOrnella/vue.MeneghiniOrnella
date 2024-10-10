<template>
    <section class="projects">
        <h3>{{ $t('hProjects') }}</h3>
        <div class="cards-group">
            <div class="card" v-for="(project, index) in projects" :key="index">
                <h4 class="title">{{ $t(`projects[${index}].title`) }}</h4>
                <!-- <img :src="getImgSrc(project.img)" :title="project.title" :alt="project.title" /> -->
                <p class="otherInfo">{{ $t(`projects[${index}].description`) }}</p>
                <!-- <div class="otherInfo" v-for="(project, item) in items" :key="item">
                    <p>{{ item.skills }}</p>
                </div> -->
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
    computed: {
        projects() {
            return data.projects.map((index) => index);
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
