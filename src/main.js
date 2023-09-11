// import "./assets/main.css";
import "./assets/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import router from "./router";
import {
  faMagnifyingGlass,
  faVolumeLow,
  faChevronLeft,
  faChevronRight,
  faCalendar,
  faPlusCircle,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { createApp } from "vue";
import App from "./App.vue";

library.add(
  faMagnifyingGlass,
  faBell,
  faVolumeLow,
  faChevronLeft,
  faChevronRight,
  faCalendar,
  faPlusCircle,
  faMailBulk
);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
