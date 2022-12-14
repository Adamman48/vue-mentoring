<template>
  <img :src="movieData.imgUrl" :alt="`${movieData.title} image`" />
  <div class="details">
    <span class="title">{{ movieData.title }}</span>
    <span class="release-date">{{ movieData.relDate }}</span>
    <span class="genre">{{ movieData.genre }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MovieItemInterface } from "../definitions/MyMovieItem.definitions";

export default defineComponent({
  name: "my-movie-item",
  props: {
    movieData: {
      type: Object as PropType<MovieItemInterface>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss"></style>
