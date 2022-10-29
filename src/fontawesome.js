// import Vue from "vue";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   faHome,
//   faBuilding,
//   faImages,
//   faAt
// } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
    faHouse, faBriefcase, faMessage, 
    faEnvelope, faLinkedin, faGithub 
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHouse, faBriefcase, faMessage, faEnvelope, faLinkedin, faGithub);

Vue.component("font-awesome-icon", FontAwesomeIcon);


