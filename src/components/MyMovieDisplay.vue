<template>
  <header class="header-display">
    <div class="logo">
      <MyLogo :size="SizeEnum.S" />
      <span class="material-icons search-icon" @click="handleMovieSelection()">
        search
      </span>
    </div>
    <div class="wrapper">
      <img
        :src="movieData.poster_path"
        :alt="`${movieData.title} poster image`"
      />
      <section class="info-section">
        <header>
          <div>
            <span class="title">{{ movieData.title }}</span>
            <span class="rating">{{ movieData.vote_average }}</span>
          </div>
          <span class="tag">{{ movieData.tagLine }}</span>
        </header>
        <div class="numbers">
          <span class="release-date">{{ movieData.release_date }}</span>
          <span class="running-time">{{ movieData.runtime }} min</span>
        </div>
        <span class="synopsis">{{ movieData.overview }}</span>
      </section>
    </div>
  </header>
</template>

<script lang="ts">
import { imageUtils } from "@/mixins/imageUtils.mixin";
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import MyLogo from "@/components/MyLogo.vue";
import { enums } from "@/mixins/enums.mixin";
import { SizeEnum } from "@/definitions/MyLogo.definitions";

export default defineComponent({
  name: "my-movie-display",
  components: {
    MyLogo,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      getMovieById: "movies/getMovieById",
    }),
    movieData() {
      return this.getMovieById(this.id);
    },
  },
  methods: {
    ...mapActions({
      updateSearchValue: "controls/updateSearchValue",
    }),
    handleMovieSelection(): void {
      this.$router.push("/");
      this.updateSearchValue("");
    },
  },
  mixins: [imageUtils, enums],
});
</script>

<style scoped lang="scss">
.search-icon {
  z-index: 10;
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
}

.wrapper {
  font-family: sans-serif;
  padding-left: 2%;
  color: white;
  height: 75%;

  img {
    float: left;
    height: 96%;
    max-width: 25vw;
  }

  .info-section {
    display: inline-block;
    width: 60vw;
    margin: 5% 5% 5% 1%;

    header {
      top: 7rem;
    }
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
