<template>
  <nav class="navigation-menu">
    <router-link class="logo" to="/">
      <ProjectLogo />
    </router-link>
    <NavigationMenu />
    <SearchButton />
  </nav>
</template>

<script setup>
import NavigationMenu from "../components/NavigationMenu";
import ProjectLogo from "../components/ProjectLogo.vue";
import SearchButton from "../components/SearchButton.vue";
</script>

<style scoped lang="scss">
.navigation-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
}
</style>
