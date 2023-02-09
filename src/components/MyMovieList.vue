<template>
  <div class="results-header">
    <span class="results-total">{{ movieList.length }} movie found</span>
    <span class="results-toggle">
      <span>SORT BY</span>
      <MyButton
        :innerText="[
          { value: SortToggleEnum.REL_DATE, label: 'release' },
          { value: SortToggleEnum.RATING, label: 'rating' },
        ]"
        @toggle-changed="setSortBy"
      />
    </span>
  </div>
  <section class="results-section">
    <div
      class="results-main"
      :style="{
        display: movieList.length ? 'grid' : 'block',
        height: movieList.length ? 'unset' : '16vh',
      }"
    >
      <MyMovieCard
        v-for="item in movieList"
        :movieData="item"
        :key="`movie-${item.title}`"
        @movie-selected="handleMovieSelection"
      />
      <span v-if="!movieList.length" class="empty-list">No films found :(</span>
    </div>
  </section>
</template>

<script lang="ts">
import { MovieItemInterface } from "@/definitions/MyMovieItem.definitions";
import { defineComponent, PropType } from "vue";
import MyButton from "./MyButton.vue";
import MyMovieCard from "./MyMovieCard.vue";
import { SortToggleEnum } from "@/definitions/MainPage.definitions";
import { enums } from "@/mixins/enums.mixin";
import { mapActions } from "vuex";

export default defineComponent({
  name: "my-movie-list",
  components: {
    MyButton,
    MyMovieCard,
  },
  props: {
    movieList: {
      type: Array as PropType<MovieItemInterface[]>,
      required: true,
    },
  },
  computed: {},
  methods: {
    ...mapActions({
      selectMovie: "movies/selectMovie",
      setSortBy: "controls/setSortBy",
    }),
  },
  handleMovieSelection(movieId: number | null): void {
    this.selectMovie(movieId);
  },
  mixins: [enums],
});
</script>

<style lang="scss" scoped>
.results-section {
  height: 90vh;
  /* should be removed later */
  display: inline;

  .results-main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    padding: 5% 2%;
  }
}

.results-header {
  height: 10vh;
  width: 100%;
  background-color: #555555;

  .results-total {
    float: left;
    position: relative;
    top: 1.2em;
    font-weight: 700;
    font-size: 1.25em;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    margin: 0 0 1% 6%;
    color: white;
  }

  .results-toggle {
    float: right;
    margin: 1% 5% 0 0;
    color: white;
  }
}

.results-main {
  background-color: #232323;
  color: #ffffff;
}
</style>
