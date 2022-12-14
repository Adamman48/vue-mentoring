<template>
  <div class="item-wrapper">
    <img :src="getImgUrl(movieData.imgUrl)" :alt="`${movieData.title} image`" />
    <div class="details">
      <span class="title">{{ movieData.title }}</span>
      <span class="release-date">{{ movieData.relDate }}</span>
      <span class="genre">{{ movieData.genre }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { imageUtils } from "@/mixins/imageUtils.mixin";
import { defineComponent, PropType } from "vue";
import { MovieItemInterface } from "../definitions/MyMovieItem.definitions";

export default defineComponent({
  name: "my-movie-card",
  props: {
    movieData: {
      type: Object as PropType<MovieItemInterface>,
      required: true,
    },
  },
  mixins: [imageUtils],
});
</script>

<style scoped lang="scss">
.item-wrapper {
  width: 25vw;
  height: 70vh;
  margin-bottom: 3em;

  .details {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    text-align: left;

    .title {
      font-weight: 700;
    }

    .release-date {
      float: right;
      border-style: solid;
      border-width: thin;
      border-radius: 0.3em;
      font-weight: 500;
      padding: 1% 5%;
      margin-top: 0.8em;
    }

    .genre {
      display: block;
      font-weight: 500;
    }

    .title,
    .release-date {
      display: inline-block;
      margin: 1em 0 0.5em 0;
    }
  }

  img {
    height: auto;
    max-width: 25vw;
  }
}
</style>
