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
	faLanguage,
	faBars,
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
	faLanguage,
	faBars
);

import { createI18n } from "vue-i18n";
import en from "@/data/i18n/en.json";
import es from "@/data/i18n/es.json";

const i18n = createI18n({
	locale: "es",
	fallbackLocale: "en",
	messages: {
		en,
		es,
	},
	missing: (locale, key) => {
		console.warn(`Missing translation for key: ${key} in locale: ${locale}`);
		return key;
	},
});

createApp(App)
	.use(router)
	.use(i18n)
	.component("font-awesome-icon", FontAwesomeIcon)
	.mount("#app");
