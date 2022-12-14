<template>
  <MySearch />
  <MyButton :innerText="['title', 'genre']" />
</template>

<script lang="ts">
import MyButton from "@/components/MyButton.vue";
import MySearch from "@/components/MySearch.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainPage",
  components: {
    MyButton,
    MySearch,
  },
});
</script>

<style scoped lang="scss"></style>
