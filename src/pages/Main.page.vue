<template>
  <div class="backdrop" :class="classObj"></div>
  <div class="background" :class="classObj"></div>
  <router-view name="main" />
  <router-view name="list" />
  <footer>
    <MyLogo :size="SizeEnum.XS" />
  </footer>
</template>

<script lang="ts">
import MyLogo from "@/components/MyLogo.vue";
import { SizeEnum } from "@/definitions/MyLogo.definitions";
import { defineComponent } from "vue";

import { enums } from "@/mixins/enums.mixin";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "main-page",
  components: {
    MyLogo,
  },
  computed: {
    ...mapGetters({
      filteredAndSortedList: "movies/filteredAndSortedList",
    }),
    classObj() {
      return {
        "header-display": this.$route.name?.toString().includes("movie"),
      };
    },
  },
  methods: {
    ...mapActions({
      fetchMovies: "movies/fetchMovies",
    }),
  },
  async created() {
    await this.fetchMovies();
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
