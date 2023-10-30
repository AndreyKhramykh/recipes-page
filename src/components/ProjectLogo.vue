/* eslint-disable */
<template>
  <img src="../assets//img/logo.png" alt="" />
</template>

<script setup></script>

<style scoped>
img {
  width: 70px;
  height: 70px;
}
img:hover {
  filter: brightness(0.9);
}

@media screen and (max-width: 600px) {
  img {
    width: 40px;
    height: 40px;
  }
}
</style>
