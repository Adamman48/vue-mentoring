import { createRouter, createWebHistory } from "vue-router";
import MyMovieDisplayVue from "@/components/MyMovieDisplay.vue";
import MyMovieListVue from "@/components/MyMovieList.vue";
import MyNotFoundVue from "@/components/MyNotFound.vue";
import MySearchSuiteVue from "@/components/MySearchSuite.vue";

const routes = [
  {
    path: "/",
    redirect: "/search",
  },
  {
    path: "/search",
    name: "home",
    components: {
      main: MySearchSuiteVue,
      list: MyMovieListVue,
    },
    props: {
      main: true,
    },
  },
  {
    path: "/movie/:id",
    name: "movie",
    components: {
      main: MyMovieDisplayVue,
      list: MyMovieListVue,
    },
    props: {
      main: true,
    },
  },
  {
    path: "/not-found",
    components: {
      main: MySearchSuiteVue,
      list: MyNotFoundVue,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
