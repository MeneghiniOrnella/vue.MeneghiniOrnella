<template>
  <div class="hello">
     <h1>{{ msg }}</h1>
    <div>
      <div v-for="tool in tools" class="cv">
        <h3>{{ tool.title }}</h3>
        <p>{{ tool.category }}</p>
        
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
} */
</style>
