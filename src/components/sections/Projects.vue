<template>
  <section class="projects">
    <h3>Projects</h3>
    <div class="cards-group">
      <div class="card"
        v-for="project in projects"
        :key="project"
      >
        <h4 class="title">{{ project.title }}</h4>
        <img
          :src="require(`@/assets/projects/${ project.img }`)"
          :title="project.title"
          :alt="project.title"
        >
        <p class="otherInfo">{{ project.description }}</p>
        <div class="projectBtns">
          <a target="_blank"
            :href="project.urlGithub"
          >GitHub</a>
          <a target="_blank"
            :href="project.urlSite"
            :class="{ inactive: project.urlSite === '' }"
          >Site</a>
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
/* .hello{
  background-color: rgb(231, 231, 231);
  padding: 0.5em 2em;
}
h3 {
  margin: 1em 0 0;
  color: #05003d;
  text-transform: capitalize;
}
p{
  color: rgb(0, 0, 0);
}
body {
  background: #f2f2f2;
}
.cards-group {
  background-color: rgb(238, 255, 203);
  display: flex;
  flex-wrap: wrap;
}
.card {
  background-color: rgb(255, 255, 255);
  margin: 1.5em 1em;
  border-radius: 15px;
  box-shadow: 4px 2px 10px #b0b0b0;
  border: 1px solid #b0b0b0;
  padding: 1.5em 2em;
  width: 15em;
  height: 30em;
}

a {
  padding: 0.4em 0.4em;
  width: 6em;
  border-radius: 50px;
  font-weight: 600;
  color: #000000;
  background-color: #c5e1fe;
  margin: 0 auto;
  display: block;
  cursor: pointer;
  text-decoration: none;
} */
</style>
