<template>
  <button>{{ props.title }}</button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
});
</script>

<style scoped>
button {
  cursor: pointer;
  width: 100px;
  height: 50px;
  background-color: var(--buttonBG);
  border: none;
  border-radius: 10px;
  color: white;
}
button:hover {
  filter: brightness(0.9);
}
</style>
