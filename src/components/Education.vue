<template>
  <div class="education">
     <h3>Education</h3>
    <div class="cards-group">
      <div v-for="education in educations" class="card">
        <h4>{{ education.title }}</h4>
        <b class="place">{{ education.place }}</b>
        <p>{{ education.start }} - {{ education.end }} | {{ education.state }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/data/education.json";

export default {
  name: 'Education',
  computed: {
    educations() {
      return data.map((education) => {
        return education;
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
.startEnd{
  text-transform: capitalize;
  
}
.cv{
  border: 1px solid #350c3a91;
  box-shadow: 0px 0px 12px #308310;
  margin: 1.5em 2em;
  border-radius: 15px;
} */
</style>
