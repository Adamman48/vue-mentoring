<template>
  <div v-if="selectedMovie" class="wrapper">
    <img
      :src="getImgUrl(selectedMovie.poster_path)"
      :alt="`${selectedMovie.title} poster image`"
    />
    <section class="info-section">
      <header>
        <div>
          <span class="title">{{ selectedMovie.title }}</span>
          <span class="rating">{{ selectedMovie.vote_average }}</span>
        </div>
        <span class="tag">{{ selectedMovie.tagLine }}</span>
      </header>
      <div class="numbers">
        <span class="release-date">{{ selectedMovie.release_date }}</span>
        <span class="running-time">{{ selectedMovie.runtime }} min</span>
      </div>
      <span class="synopsis">{{ selectedMovie.overview }}</span>
    </section>
  </div>
</template>

<script lang="ts">
import { imageUtils } from "@/mixins/imageUtils.mixin";
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "my-movie-display",
  computed: {
    ...mapState({
      selectedMovie: (state: any) => state.selectedMovie,
    }),
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
