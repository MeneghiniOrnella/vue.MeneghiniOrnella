<template>
  <div class="hello">
     <!-- <h1>{{ msg }}</h1> -->
    <div class="cards-group">
      <div v-for="education in educations" class="card">
        <h3>{{ education.title }}</h3>
        <b class="place">{{ education.place }}</b>
        <p>{{ education.start }} - {{ education.end }} | <b>{{ education.state }}</b></p>
        
        <p class="otherInfo">{{ education.otherInfo }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/data/education.json";

export default {
  name: 'Education',
  props: {
    msg: String
  },
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
.card {
  width: 100%;
  height: 10em;
  padding: 0;
  justify-self: center;
  text-align: center;
  background-color: #ffffff;
  color: #000000;
}
</style>
