<template>
  <div>
    <input type="text" placeholder="Search" />
    <MyButton :innerText="'search'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyButton from "./MyButton.vue";

export default defineComponent({
  name: "my-search",
  components: {
    MyButton,
  },
});
</script>

<style scoped lang="scss">
div {
  width: 100%;
  font-size: 1.25em;

  input {
    width: 70%;
    background-color: #232323c8;
    font-size: inherit;
    color: white;
    padding: 0.6em;
    outline: none;
    border: none;
    border-radius: 0.2em;
  }

  ::placeholder {
    color: #555555;
    opacity: 1;
  }

  button {
    height: 2.5em;
    margin: 0 0 0 1vw;
  }
}
</style>
