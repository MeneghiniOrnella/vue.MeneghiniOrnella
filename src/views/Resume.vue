<template>
  <!-- <Header /> -->
  <div>
    <button class="a"
      v-for="tab in tabs"
      :key="tab"
      @click="selected = tab;"
      :class="['tab-btn', { active: selected === tab }]"
    >
      {{ tab }}
    </button>
    <component :is="selected" class="tab"></component>
  </div>
  <Language />
  <Footer />
</template>

<script>
import Header    from "@/components/sections/Banner.vue";
import Education from "@/components/Education";
import Work      from "@/components/Work";
import Language  from "@/components/Language.vue";
import Footer    from "@/components/sections/Footer.vue";

export default {
  data: function() {
    return {
      tabs: ["Work", "Education"],
      selected: "Work"
    };
  },
  components: {
    Header,
    Work,
    Education,
    Language,
    Footer
  }
};
</script>