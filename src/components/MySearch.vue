<template>
  <div>
    <input type="text" placeholder="Type here..." />
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

  input {
    width: 70%;
    background-color: #2323238b;
    color: white;
    padding: 0.6em;
    font-size: 15pt;
    outline: none;
    border: none;
    border-radius: 0.2em;
  }

  ::placeholder {
    color: white;
    opacity: 1;
  }

  button {
    height: 2.5em;
    margin: 0 0 0 1vw;
  }
}
</style>
