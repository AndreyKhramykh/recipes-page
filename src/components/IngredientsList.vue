<template>
  <ul>
    <li v-for="n in props.ingredients.length" :key="n">
      {{ props.ingredients[n - 1] }}
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  ingredients: {
    required: true,
    default: "ingredients",
  },
});
</script>

<style scoped>
li {
  list-style: inside url(@/assets/img/liMarker2.svg);
}
</style>
