<template>
  <Header />
  <div class="mainPage__container">
    <h1>Website with the best recipes</h1>
    <p>
      On this site I will publish selected recipes for dishes, ingredients and
      the sequence of actions for their preparation
    </p>
    <router-link class="link-button" to="/recipes">
      <StartButton title="Start" />
    </router-link>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import StartButton from "@/components/StartButton.vue";
</script>

<style scoped lang="scss">
* {
  color: var(--secondaryTxtColor);
}
.mainPage__container {
  min-height: calc(100vh - 90px);
  background-image: url(../assets/img/mainBG.png);
  background-size: 100% 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 40px;
}
h1 {
  font-weight: 600;
  font-size: 85px;
  grid-area: 1/2/1/2;
  align-self: end;
}
p {
  font-size: 16px;
  font-weight: 400;
  grid-area: 2/2/2/2;
}
.link-button {
  justify-self: center;
  grid-area: 3/2/3/2;
}

@media screen and (max-width: 768px) {
  h1,
  p {
    color: var(--buttonBG);
    text-shadow: 1px 1px 2px black;
  }
  h1 {
    font-size: 40px;
  }
  p {
    font-size: 20px;
  }
  .mainPage__container {
    grid-template-columns: 1fr;
    text-align: center;
    background-image: none;
    background: linear-gradient(#f5f9fa, #e2ebef);
  }
}
</style>
