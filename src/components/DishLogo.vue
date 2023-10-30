<template>
  <img :src="require(`@/assets/img/${props.dishImage}`)" alt="" />
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  dishImage: {
    required: true,
    default: "image",
  },
});
</script>

<style></style>
