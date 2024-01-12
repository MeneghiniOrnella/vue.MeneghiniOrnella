import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
// import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
	faHouse,
	faBriefcase,
	faMessage,
	faEnvelope,
	faAward,
	faCircleDown,
} from "@fortawesome/free-solid-svg-icons";

import { faGithub as fasGithub } from "@fortawesome/free-brands-svg-icons";

library.add(
	faHouse,
	faBriefcase,
	faMessage,
	faEnvelope,
	faAward,
	fasGithub,
	faCircleDown
);

// https://fontawesome.com/docs/web/use-with/vue/add-icons

createApp(App)
    // .use(store)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');