<template>
  <nav>
    <router-link to="/">Main</router-link>
    <router-link to="/recipes">Recipes</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
* {
  text-decoration: none;
  color: black;
}
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 60%;
}
a:hover {
  color: var(--buttonBG);
  transform: scale(1.05);
}
@media screen and (max-width: 600px) {
  nav {
    gap: 20px;
    flex-direction: column;
    margin-bottom: 20px;
  }
}
</style>
