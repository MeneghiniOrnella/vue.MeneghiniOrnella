<template>
  <div class="work">
    <h3>Work Experience</h3>
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
import data from "@/data/work.json";

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
/* .hello{
  background-color: rgb(231, 231, 231);
  padding: 0.5em 2em;
}
h3 {
  margin: 40px 0 0;
  color: #05003d;
  text-transform: capitalize;
}
p{
  color: rgb(0, 0, 0);
}
.startEnd{
  text-transform: uppercase;
  
}
.cv{
  border: 1px solid #350c3a91;
  box-shadow: 0px 0px 12px #d882d8;
  margin: 2.5em 2em;
  border-radius: 15px;
} */
.card {
  width: 80%;
  padding: 0;
  justify-self: center;
  text-align: center;
  background-color: #ffffff;
  color: #000000;
}
</style>

