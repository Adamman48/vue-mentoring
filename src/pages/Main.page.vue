<template>
  <MyButton :inner-text="['title', 'genre']" />
</template>

<script lang="ts">
import MyButton from "@/components/MyButton.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainPage",
  components: {
    MyButton,
  },
});
</script>

<style scoped lang="scss"></style>
