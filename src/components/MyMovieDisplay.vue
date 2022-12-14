<template>
  <div class="wrapper"></div>
</template>

<script lang="ts">
import { MovieItemInterface } from "@/definitions/MyMovieItem.definitions";
import { imageUtils } from "@/mixins/imageUtils.mixin";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "my-movie-display",
  props: {
    movieData: {
      type: Object as PropType<MovieItemInterface>,
      required: true,
    },
  },
  mixins: [imageUtils],
});
</script>

<style scoped lang="scss"></style>
