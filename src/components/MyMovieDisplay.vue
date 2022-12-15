<template>
  <div v-if="movieData" class="wrapper">
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
        <span class="release-date">{{ movieData.release }}</span>
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
      type: Object as PropType<MovieItemInterface | undefined>,
      required: true,
    },
  },
  mixins: [imageUtils],
});
</script>

<style scoped lang="scss">
.wrapper {
  font-family: sans-serif;
  padding-left: 2%;
  color: white;
  height: 86%;

  img {
    float: left;
    height: 90%;
    max-width: 25vw;
  }

  .info-section {
    display: inline-block;
    width: 60vw;
    margin: 5% 5% 5% 1%;
  }

  header {
    text-align: left;

    .title {
      font-size: 2em;
      max-width: 50%;
    }

    .rating {
      margin-left: 5%;
      border-radius: 50%;
      border-style: solid;
      padding: 2%;
      font-size: 1.5em;
      color: #a1e66f;
      border-color: white;
      border-width: 0.06em;
    }

    .tag {
      display: block;
      margin-top: 2%;
      max-width: 30%;
    }
  }

  .numbers {
    margin: 2% 0;
    text-align: left;
    color: #f65261;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 1.5em;
    font-weight: 300;

    .running-time {
      margin-left: 5%;
    }
  }

  .synopsis {
    display: block;
    text-align: left;
    font-size: 1.2em;
  }
}
</style>
