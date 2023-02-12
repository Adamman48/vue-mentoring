<template>
  <section class="results-section">
    <div class="results-main">
      <span class="empty-list">No films found :(</span>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "my-not-found",
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
