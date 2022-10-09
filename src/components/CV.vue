<template>
  <div>
  <ul>
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :aria-setsize="tabs.length"
        :aria-posinet="index + 1"
      >
        <a
           href="javascript:void(0);"
           class="tabBlock-tab"
           :class="active_tab === index ? 'is-active' : ''"
           :aria-selected="active_tab === index"
           @click="changeTab(index)"
        >
          <!-- <svg aria-hidden="true">
            <use :xlink:href="'#icon-' + tab.tab_icon"></use>
          </svg> -->
          {{ tab.tab_title }}
        </a>
      </li>
    </ul>
    <div>
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :aria-current="active_tab === index"
        class="tabBlock-pane"
        v-show="active_tab === index"
      >
        <p>{{ tab.tab_content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/data/data2.json";

export default {
  name: 'CV',
  props: {
    msg: String
  },
  data() {
    return {
      active_tab: 0,
      tabs: [
        {
          tab_title: "Education",
          tab_content:
            "Lic. en comex"
        },
        {
          tab_title: "Trabajo",
          tab_content:
            "Full stack developer"
        },
        {
          tab_title: "Cursos",
          tab_content:
            'Full stack developer - NodeJs'
        }
      ]
    };
  },
  methods: {
    changeTab(tabIndexValue) {
      this.active_tab = tabIndexValue;
    }
  }
}; 
</script>

<style scoped>
li {
  list-style: none;
  display: inline-block;
}
a{
  padding: 1em 2em;
  background-color:#06074c;
  color: white;
  text-decoration: none;
}
a:hover, a:focus {
  background-color: rgb(253, 185, 255);
  color: #d2d2ea;
  /*background-color: #682554;*/
}


</style>