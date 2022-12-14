import { action } from "@storybook/addon-actions";

import MyButton from "../components/MyButton.vue";

export default {
  title: "Button",
  componet: MyButton,
};

export const normalButton = () => ({
  components: { MyButton },
  template: '<my-button @click="action" innerText="search"></my-button>',
  methods: { action: action("clicked") },
});

export const toggleButton = () => ({
  render() {
    return <MyButton innerText={["title", "genre"]} />;
  },
});
