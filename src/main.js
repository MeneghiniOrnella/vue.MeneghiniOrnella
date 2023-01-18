import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faBriefcase, faMessage, faEnvelope, faAward } from '@fortawesome/free-solid-svg-icons'

import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faHouse, faBriefcase, faMessage, faEnvelope, faAward, faGithub);

// https://fontawesome.com/docs/web/use-with/vue/add-icons

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');


