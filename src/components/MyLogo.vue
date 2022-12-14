<template>
  <div :class="`size-${size} logo-wrapper`">
    <span>netflix</span>
    <span>roulette</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { SizeEnum } from "../definitions/MyLogo.definitions";

export default defineComponent({
  name: "my-logo",
  props: {
    size: {
      type: String as PropType<SizeEnum>,
      default: SizeEnum.S,
    },
  },
});
</script>

<style scoped lang="scss">
.size {
  &-xs {
    font-size: 1em;
  }
  &-s {
    font-size: 1.5em;
  }
  &-m {
    font-size: 2em;
  }
  &-l {
    font-size: 2.5em;
  }
  &-xl {
    font-size: 3em;
  }
}

div {
  color: #f65261;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  :nth-child(1) {
    font-weight: 900;
  }

  :nth-child(2) {
    font-weight: 300;
  }
}
</style>
