<template>
  <header>
    <MyLogo :size="SizeEnum.S" />
    <MySearch />
    <div class="search-toggle">
      <span>SEARCH BY</span>
      <MyButton :innerText="['title', 'genre']" />
    </div>
  </header>
  <section class="results-section">
    <div class="results-header">
      <span class="results-total">{{ movieDataList.length }} movie found</span>
      <span class="results-toggle">
        <span>SORT BY</span>
        <MyButton :innerText="['release date', 'rating']" />
      </span>
    </div>
    <div class="results-main">
      <MyMovieCard
        v-for="item in movieDataList"
        :movieData="item"
        :key="`movie-${item.title}`"
      />
    </div>
  </section>
  <footer>
    <MyLogo :size="SizeEnum.XS" />
  </footer>
  <MyMovieDisplay :movieData="movieDataList[0]" />
</template>

<script lang="ts">
import MyMovieCard from "@/components/MyMovieCard.vue";
import MyButton from "@/components/MyButton.vue";
import MyLogo from "@/components/MyLogo.vue";
import MySearch from "@/components/MySearch.vue";
import { SizeEnum } from "@/definitions/MyLogo.definitions";
import { defineComponent } from "vue";

import { mockMovieDataList } from "../../mocks/movieData.mock";
import { enums } from "@/mixins/enums.mixin";
import MyMovieDisplay from "@/components/MyMovieDisplay.vue";

export default defineComponent({
  name: "main-page",
  components: {
    MyButton,
    MySearch,
    MyLogo,
    MyMovieCard,
    MyMovieDisplay,
  },
  data() {
    return {
      movieDataList: mockMovieDataList,
    };
  },
  mixins: [enums],
});
</script>

<style scoped lang="scss">
.results-section {
  height: 90vh;
  /* should be removed later */
  display: inline;
}
.search-toggle {
  font-size: 1.25em;
  font-weight: 500;
}

.results-header {
  height: 10vh;
  width: 100%;

  .results-total {
    float: left;
    position: relative;
    top: 1.2em;
    font-weight: 700;
    font-size: 1.25em;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  .results-toggle {
    float: right;
  }
}
</style>
