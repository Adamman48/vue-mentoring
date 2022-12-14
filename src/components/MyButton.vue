<template>
  <button :class="classObj" @click="onClick">
    {{ typeof innerText === "string" ? innerText.toUpperCase() : null }}
    <template v-if="Array.isArray(innerText)">
      <span
        v-for="(item, index) in innerText"
        :key="`toggle-item-${index}`"
        :class="{ selected: item === selected }"
        >{{ item.toUpperCase() }}</span
      >
    </template>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "my-button",
  props: {
    innerText: {
      type: [String, Array],
      required: true,
      // ? USED TO WORK NOW IT DOESN'T WTF ?
      /*       validator(value) {
        const isString = typeof value === "string";
        const isTwoMemberStringList =
          Array.isArray(value) &&
          value.every((item) => typeof item === "string") &&
          value.length === 2;
        return isString || isTwoMemberStringList;
      }, */
    },
  },
  data() {
    return {
      selected: Array.isArray(this.innerText)
        ? this.innerText[0]
        : this.innerText,
    };
  },
  computed: {
    classObj() {
      return {
        "normal-button": !Array.isArray(this.innerText),
        "toggle-button": Array.isArray(this.innerText),
      };
    },
  },
  methods: {
    onClick() {
      /**
       * Click event
       *
       * @event click
       */
      if (Array.isArray(this.innerText)) {
        const toggledValue = this.innerText.find(
          (val) => val !== this.selected
        );
        this.selected = toggledValue;
        this.$emit("toggleChanged", toggledValue);
      } else {
        this.$emit("toggleChanged");
      }
      console.log("button pressed");
    },
  },
});
</script>

<style scoped lang="scss">
button {
  border: 1px solid #eee;
  cursor: pointer;
  font-size: inherit;
  border-radius: 5px;
  margin: 10px;
  color: white;
}

.toggle-button {
  padding: 1em 0 1em 0;
  background-color: #55555577;

  span {
    padding: 1em;
    &:nth-child(1) {
      border-radius: 5px 0 0 5px;
    }
    &:nth-child(2) {
      border-radius: 0 5px 5px 0;
    }
  }
}

.selected,
.normal-button {
  background-color: #f65261;
}

.normal-button {
  padding: 0.5em 2em;
}
</style>
