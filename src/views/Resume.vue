<template>
  <div>
  <div>
    <button
      v-for="tab in tabs"
      :key="tab"
      @click="selected = tab;"
      :class="['tab-btn', { active: selected === tab }]"
    >
      {{ tab }}
    </button>

    <component :is="selected" class="tab"></component>
  </div>
  <p>Solo aparecen las ultomas actividades que hice, para + info ir a LinkedIn</p>
  </div>
</template>

<script>
import Education from "@/components/Education";
import Work      from "@/components/Work";

export default {
  data: function() {
    return {
      tabs: ["Work", "Education"],
      selected: "Work"
    };
  },
  components: {
    Work,
    Education
  }
};
</script>

<style>
.tab-btn {
  padding: 6px 10px;
  background: #dacb21;
  cursor: pointer;
  margin-bottom: 1rem;
  border: none;
  outline: none;
  font-size: 1em;
}

.active {
  border-bottom: 5px solid rgb(195, 0, 195);
  background: #fcfcf;
}

.title{
  font-size: 1.5em;
}

/* .tab {
  border: 5px solid rgb(0, 247, 255);
  padding: 10px;
} */
</style>
