<template>
  <section class="skills">
     <h3>Skills</h3>
    <div class="cards-group">
      <div v-for="tool in tools" class="tool">
        <img
          :src="require(`@/assets/tools/${ tool.img }`)"
          :title="tool.title" 
          :alt="tool.title" 
        /><br>
        <!-- <span class="tool">{{ tool.title }}</span> -->
      </div>
    </div>
  </section>
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
      return data.map((tool) => tool)
    }
  }
}
</script>

<style scoped>
.tool {
  margin: 0.6em 1.4em;
}

img {
  height: 5em;
  width: 5em;
}
.tool img:hover {
  animation: rotate-tool 6s linear 0.5s 4 normal forwards running;
}
@keyframes rotate-tool {
  from {
    transform: rotate(0);
  } to {
    transform: rotate(360deg);
  }
}

.tool img[title]:hover {
  position: relative;
}
.tool img[title]:hover::after {
  position: absolute;
  left: 50%;
  top: 100%;
  padding: 4px;
  background: rgb(255, 0, 0);
  white-space: nowrap;
  z-index: 99;
  transform: translateX(-50%);
  content: attr(title);
}
</style>