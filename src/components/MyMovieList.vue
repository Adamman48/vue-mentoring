<template>
  <div class="results-header">
    <span class="results-total"
      >{{ filteredAndSortedList.length }} movie found</span
    >
    <span class="results-toggle">
      <span>SORT BY</span>
      <MyButton
        :innerText="[
          {
            value: SortToggleEnum.REL_DATE,
            label: 'release',
            selected: sortBy === SortToggleEnum.REL_DATE,
          },
          {
            value: SortToggleEnum.RATING,
            label: 'rating',
            selected: sortBy === SortToggleEnum.RATING,
          },
        ]"
        @toggle-changed="setSortBy"
      />
    </span>
  </div>
  <section class="results-section">
    <div
      class="results-main"
      :style="{
        display: filteredAndSortedList.length ? 'grid' : 'block',
        height: filteredAndSortedList.length ? 'unset' : '16vh',
      }"
    >
      <MyMovieCard
        v-for="item in filteredAndSortedList"
        :movieData="item"
        :key="`movie-${item.title}`"
        @movie-selected="handleMovieSelection"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyButton from "./MyButton.vue";
import MyMovieCard from "./MyMovieCard.vue";
import { SortToggleEnum } from "@/definitions/MainPage.definitions";
import { enums } from "@/mixins/enums.mixin";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "my-movie-list",
  components: {
    MyButton,
    MyMovieCard,
  },
  computed: {
    ...mapGetters({
      getAllMovies: "movies/getAllMovies",
      filteredAndSortedList: "movies/filteredAndSortedList",
      sortBy: "controls/sortBy",
      searchBy: "controls/searchBy",
    }),
  },
  methods: {
    ...mapActions({
      setSortBy: "controls/setSortBy",
    }),
    handleMovieSelection(movieId: number | null): void {
      this.$router.push({ name: "movie", params: { id: movieId } });
    },
  },
  created() {
    this.setSortBy(SortToggleEnum.REL_DATE);
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

.empty-list {
  font-size: 3em;
  display: block;
  position: relative;
  top: 25%;
}
</style>
