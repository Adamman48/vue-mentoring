<template>
  <header>
    <div class="logo">
      <MyLogo :size="SizeEnum.S" />
    </div>
    <div>
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
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyButton from "@/components/MyButton.vue";
import MySearch from "@/components/MySearch.vue";
import MyLogo from "@/components/MyLogo.vue";
import { SizeEnum } from "@/definitions/MyLogo.definitions";
import { SearchToggleEnum } from "@/definitions/MainPage.definitions";
import { enums } from "@/mixins/enums.mixin";
import { mapActions, mapGetters } from "vuex";
import { MovieItemInterface } from "@/definitions/MyMovieItem.definitions";

export default defineComponent({
  name: "my-search-suite",
  components: {
    MyButton,
    MySearch,
    MyLogo,
  },
  computed: {
    ...mapGetters({
      filteredAndSortedList: "movies/filteredAndSortedList",
    }),
  },
  methods: {
    ...mapActions({
      setSearchBy: "controls/setSearchBy",
      updateSearchValue: "controls/updateSearchValue",
    }),
    handleSearch(newText: string): void {
      this.updateSearchValue(newText);
    },
  },
  watch: {
    filteredAndSortedList(newValue: MovieItemInterface[]) {
      if (newValue.length) {
        this.$router.push("/");
      } else {
        this.$router.push("/not-found");
      }
    },
  },
  mixins: [enums],
});
</script>

<style lang="scss" scoped>
.logo {
  margin-bottom: 2%;
  padding-top: 0;
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

.search-toggle {
  font-size: 1.25em;
  font-weight: 500;
  text-align: left;
  margin-left: 6%;
}
</style>
