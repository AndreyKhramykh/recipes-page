<template>
  <Header />
  <div class="container">
    <div>
      This page was made as a pet-project for the developer's portfolio, and
      this is a site with recipes. Stay tuned for further updates on GitHub.
    </div>
    <a target="_blank" href="https://github.com/AndreyKhramykh"
      >Link to GitHub</a
    >
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
</script>

<style scoped lang="scss">
.container {
  background: linear-gradient(#f5f9fa, #e2ebef);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  font-size: 2em;
  height: calc(100vh - 90px);

  & > div {
    text-align: center;
  }

  & > a {
    margin-top: 20px;
    text-decoration: none;
    color: var(--buttonBG);

    &:hover {
        transform: scale(1.1);
    }
  }
}
</style>
