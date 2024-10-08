import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
	faHouse,
	faBriefcase,
	faMessage,
	faEnvelope,
	faAward,
	faCircleDown,
	faFilePdf,
	faLanguage
} from "@fortawesome/free-solid-svg-icons";
import { faGithub as fasGithub } from "@fortawesome/free-brands-svg-icons";
library.add(
	faHouse,
	faBriefcase,
	faMessage,
	faEnvelope,
	faAward,
	fasGithub,
	faCircleDown,
	faFilePdf,
	faLanguage
);

import { createI18n } from "vue-i18n";
import en from "./i18n/en.json";
import es from "./i18n/es.json";

const messages = {
	en: en,
	es: es
};
const i18n = createI18n({
	locale: "es",
	fallbackLocale: "en",
	messages,
});

createApp(App)
	.use(router)
	.use(i18n)
	.component("font-awesome-icon", FontAwesomeIcon)
	.mount("#app");