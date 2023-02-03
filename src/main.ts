import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

const filters = {
  uppercase(value: any) {
    if (typeof value === "string") {
      return value.toUpperCase();
    }
  },
};

const app = createApp(App);

app.config.globalProperties.$filters = filters;

app.use(store);
app.mount("#app");
