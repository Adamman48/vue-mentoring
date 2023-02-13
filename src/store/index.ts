import { createStore } from "vuex";
import movies from "./movies";
import controls from "./controls";

export default createStore({
  modules: {
    movies,
    controls,
  },
  devtools: true,
  strict: false,
});
