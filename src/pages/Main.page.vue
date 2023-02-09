<template>
  <div class="backdrop" :class="classObj"></div>
  <div class="background" :class="classObj"></div>
  <header :class="classObj">
    <div class="logo">
      <MyLogo :size="SizeEnum.S" />
      <span
        class="material-icons search-icon"
        v-if="selectedMovie"
        @click="handleMovieSelection(null)"
        >search</span
      >
    </div>
    <div v-if="!selectedMovie">
      <span class="page-title">FIND YOUR MOVIE</span>
      <MySearch @search-triggered="handleSearch" />
      <div class="search-toggle">
        <span>SEARCH BY</span>
        <MyButton
          :innerText="[
            { value: SearchToggleEnum.TITLE, label: 'title' },
            { value: SearchToggleEnum.GENRES, label: 'genre' },
          ]"
          @toggle-changed="setSearchBy"
        />
      </div>
    </div>
    <MyMovieDisplay v-else />
  </header>
  <MyMovieList :movie-list="filteredMovieList" />
  <footer>
    <MyLogo :size="SizeEnum.XS" />
  </footer>
</template>

<script lang="ts">
import MyButton from "@/components/MyButton.vue";
import MyLogo from "@/components/MyLogo.vue";
import MySearch from "@/components/MySearch.vue";
import MyMovieList from "@/components/MyMovieList.vue";
import { SizeEnum } from "@/definitions/MyLogo.definitions";
import { defineComponent } from "vue";

import { enums } from "@/mixins/enums.mixin";
import MyMovieDisplay from "@/components/MyMovieDisplay.vue";
import {
  SearchToggleEnum,
  SortToggleEnum,
} from "@/definitions/MainPage.definitions";
import { mapActions, mapGetters, mapState } from "vuex";
import { MovieItemInterface } from "@/definitions/MyMovieItem.definitions";

export default defineComponent({
  name: "main-page",
  components: {
    MyButton,
    MySearch,
    MyLogo,
    MyMovieDisplay,
    MyMovieList,
  },
  data() {
    return {
      filteredMovieList: [] as MovieItemInterface[],
    };
  },
  computed: {
    ...mapState({
      selectedMovie: (state: any) => state.movies.selectedMovie,
    }),
    ...mapGetters({
      filteredAndSortedList: "movies/filteredAndSortedList",
      sortBy: "controls/sortBy",
      searchBy: "controls/searchBy",
    }),
    classObj() {
      return {
        "header-display": this.selectedMovie,
      };
    },
  },
  methods: {
    ...mapActions({
      selectMovie: "movies/selectMovie",
      setSortBy: "controls/setSortBy",
      setSearchBy: "controls/setSearchBy",
      updateSearchValue: "controls/updateSearchValue",
      fetchMovies: "movies/fetchMovies",
    }),
    handleSearch(): void {
      this.filteredMovieList = this.filteredAndSortedList;
    },
    handleMovieSelection(movieId: number | null): void {
      this.selectMovie(movieId);
      if (!movieId) this.updateSearchValue("");
    },
  },
  watch: {
    sortBy(): void {
      this.filteredMovieList = this.filteredAndSortedList;
    },
    searchBy(): void {
      this.filteredMovieList = this.filteredAndSortedList;
    },
  },
  async created() {
    await this.fetchMovies();
    await this.setSearchBy(SearchToggleEnum.TITLE);
    await this.setSortBy(SortToggleEnum.REL_DATE);
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

.header-display {
  height: 70vh;
  opacity: 85%;

  .logo {
    margin-bottom: 2%;
    padding-top: 0;
  }
}

header {
  position: absolute;
  top: 0;
  z-index: 3;
  width: 100%;
  height: 45vh;

  .logo {
    padding-top: 1%;
    text-align: left;
    margin-bottom: 5%;
    padding-left: 2%;

    div {
      width: 90%;
      display: inline-block;
    }

    span {
      display: inline-block;
      width: auto;
      text-align: center;
      color: #f65261;
      font-size: 2em;
      position: relative;
      top: 0.4em;
      margin-left: 3%;
      cursor: pointer;
    }
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
    margin: 1% 5% 0 0;
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

.empty-list {
  font-size: 3em;
  display: block;
  position: relative;
  top: 25%;
}
</style>
