<template>
  <div class="hello">
    <h2>Projects</h2>
    <div class="cards-group">
      <div v-for="project in projects" class="card">
        <img src="@\assets\logo.png" />
        <h3>{{ project.title }}</h3>
        <!-- <div class="skills">
          <p class="skill">{{ project.skills[0] }}</p>
          <p>{{ project.skills[1] }}</p>
        </div> -->
        <p class="otherInfo">{{ project.description }}</p>
        <a href="{{ project.GitHub }}" target="_blank">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/data/projects.json";

export default {
  name: 'Projects',
  props: {
    msg: String
  },
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
