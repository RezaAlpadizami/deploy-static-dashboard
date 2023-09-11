import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import AboutUs from "../views/AboutUs.vue";
import NewJoiners from "../views/NewJoiners.vue";
import OurTeam from "../views/OurTeam.vue";
import ProdukKita from "../views/ProdukKita.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/about-us",
      name: "about-us",
      component: AboutUs,
    },
    {
      path: "/produk-kita",
      name: "produk-kita",
      component: ProdukKita,
    },
    {
      path: "/our-team",
      name: "our-team",
      component: OurTeam,
    },
    {
      path: "/new-joiners",
      name: "new-joiners",
      component: NewJoiners,
    },
  ],
});

export default router;
