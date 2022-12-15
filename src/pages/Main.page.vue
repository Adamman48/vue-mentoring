<template>
  <div class="backdrop"></div>
  <div class="background"></div>
  <header>
    <MyLogo :size="SizeEnum.S" />
    <span class="page-title">FIND YOUR MOVIE</span>
    <MySearch @search-triggered="handleSearchChange" />
    <div class="search-toggle">
      <span>SEARCH BY</span>
      <MyButton :innerText="[SearchToggleEnum.TITLE, SearchToggleEnum.GENRE]" />
    </div>
  </header>
  <div class="results-header">
    <span class="results-total"
      >{{ filteredMovieDataList.length }} movie found</span
    >
    <span class="results-toggle">
      <span>SORT BY</span>
      <MyButton :innerText="[SortToggleEnum.REL_DATE, SortToggleEnum.RATING]" />
    </span>
  </div>
  <section class="results-section">
    <div class="results-main">
      <MyMovieCard
        v-for="item in filteredMovieDataList"
        :movieData="item"
        :key="`movie-${item.title}`"
      />
    </div>
  </section>
  <footer>
    <MyLogo :size="SizeEnum.XS" />
  </footer>
  <MyMovieDisplay :movieData="filteredMovieDataList[0]" />
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
import {
  SearchToggleEnum,
  SortToggleEnum,
} from "@/definitions/MainPage.definitions";

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
      // TODO: remove later
      movieDataList: mockMovieDataList,
      searchString: "",
      searchBy: SearchToggleEnum.TITLE,
      sortBy: SortToggleEnum.REL_DATE,
    };
  },
  computed: {
    filteredMovieDataList() {
      let resultList = [];

      if (this.searchString) {
        resultList = this.movieDataList.filter((movieItem) =>
          movieItem.title
            .toLowerCase()
            .includes(this.searchString.toLowerCase())
        );
      } else {
        resultList = this.movieDataList;
      }
      return resultList;
    },
  },
  methods: {
    handleSearchChange(searchInput: string) {
      this.searchString = searchInput;
    },
  },
  mixins: [enums],
});
</script>

<style scoped lang="scss">
.backdrop {
  height: 45vh;
  width: 100%;
  position: absolute;
  background: black;
  z-index: 2;
  opacity: 50%;
}

.background {
  background-image: url("../assets/headerBackground.png");
  position: relative;
  z-index: 1;
  background-size: cover;
  height: 45vh;
  filter: blur(2px);
}

header {
  position: absolute;
  top: 0;
  z-index: 3;
  width: 100%;
  height: 45vh;

  .logo-wrapper {
    text-align: left;
    margin-bottom: 5%;
    padding: 2% 0 0 2%;
  }

  .page-title {
    color: white;
    font-family: system-ui;
    font-size: 2.5em;
    font-weight: 200;
    display: block;
    text-align: left;
    margin: 0 0 1% 6%;
  }

  .search-toggle {
    font-size: 1em;
    color: white;
  }
}

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

.search-toggle {
  font-size: 1.25em;
  font-weight: 500;
  text-align: left;
  margin-left: 6%;
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
    margin: 0.6% 5% 0 0;
    color: white;
  }
}

.results-main {
  background-color: #232323;
  color: #ffffff;
}

footer {
  width: 100%;
  height: 10vh;
  background-color: #424242;

  .logo-wrapper {
    position: relative;
    top: 35%;
  }
}
</style>
