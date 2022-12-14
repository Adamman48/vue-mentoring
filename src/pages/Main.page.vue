<template>
  <MyLogo :size="SizeEnum.S" />
  <MySearch />
  <MyButton :innerText="['title', 'genre']" />
  <MyLogo :size="SizeEnum.XS" />
</template>

<script lang="ts">
import MyButton from "@/components/MyButton.vue";
import MyLogo from "@/components/MyLogo.vue";
import MySearch from "@/components/MySearch.vue";
import { SizeEnum } from "@/definitions/MyLogo.definitions";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainPage",
  data() {
    return {
      SizeEnum: SizeEnum,
    };
  },
  components: {
    MyButton,
    MySearch,
    MyLogo,
  },
});
</script>

<style scoped lang="scss"></style>
