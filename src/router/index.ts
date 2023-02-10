import { createRouter, createWebHistory } from "vue-router";
import MainPageVue from "@/pages/Main.page.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPageVue,
  },
  {
    path: "/movie",
    name: "movie",
    component: {},
  },
  {
    path: "/not-found",
    name: "not-found",
    component: {},
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
