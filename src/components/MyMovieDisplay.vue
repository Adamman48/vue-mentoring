<template>
  <div class="wrapper">
    <img
      :src="getImgUrl(movieData.imgUrl)"
      :alt="`${movieData.title} poster image`"
    />
    <section class="info-section">
      <header>
        <div>
          <span class="title">{{ movieData.title }}</span>
          <span class="rating">{{ movieData.rating }}</span>
        </div>
        <span class="tag">{{ movieData.tag }}</span>
      </header>
      <div class="numbers">
        <span class="release-date">{{ movieData.relDate }}</span>
        <span class="running-time">{{ movieData.runningTimeInMins }} min</span>
      </div>
      <span class="synopsis">{{ movieData.synopsis }}</span>
    </section>
  </div>
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
