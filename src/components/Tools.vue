<template>
  <div class="hello">
     <h3>Skills</h3>
    <div class="cards-group">
      <div v-for="tool in tools">
        <img :src="require(`@/assets/tools/${ tool.img }`)" />
        <p class="tool">{{ tool.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/data/tools.json";

export default {
  name: 'Tools',
  props: {
    msg: String
  },
  computed: {
    tools() {
      return data.map((tool) => {
        return tool;
      })
    }
  }
}
</script>


<style scoped>
/* .hello{
  background-color: rgb(234, 234, 234);
  padding: 0.5em 2em;
}
h3 {
  margin: 40px 0 0;
  color: #05003d;
  text-transform: capitalize;
}
.cv{
  border: 1px solid #350c3a91;
  box-shadow: 0px 0px 12px #9d0a9d;
  margin: 2.5em 2em;
  border-radius: 15px;
}
.tool {
  font-size: larger;
} */

/* .card {
  width: 8em;
  height: 4em;
  padding: 0;
  justify-items: center;
  text-align: center;
  background-color: #c5e1fe;
  color: #000000;
  font-weight: 700;
} */

/* .card:focus, .card:hover {
    background-color: rgb(205, 36, 191);
    color: #ffffff;
} */

img {
  height: 5em;
  width: 5em;
}
</style>
