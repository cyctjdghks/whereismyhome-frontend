import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCircleUser,
  faMagnifyingGlass,
  faRightFromBracket,
  faHeart as fasHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(
  faCircleUser,
  faMagnifyingGlass,
  faRightFromBracket,
  fasHeart,
  farHeart
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
