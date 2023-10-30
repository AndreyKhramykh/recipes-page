<template>
  <Header />
  <div class="container">
    <div class="cards-container">
      <RecipeCard
        v-for="n in dishCards.length"
        :key="n"
        :calories="`${dishCards[n - 1].calories} / 100 gr`"
        :dishDescription="dishCards[n - 1].description"
        :dishTitle="dishCards[n - 1].title"
        :timeToCook="dishCards[n - 1].timeToCook"
        :dishImage="dishCards[n - 1].dishImage"
        :ingredients="dishCards[n - 1].ingredients"
        :id="dishCards[n - 1].id"
      />
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import { useStore } from "@/stores/index.js";
import RecipeCard from "@/components/RecipeCard.vue";

const store = useStore();

const dishCards = store.dishCards;
</script>

<style scoped lang="scss">
.container {
  min-height: calc(100vh - 90px);
  background: linear-gradient(#f5f9fa, #e2ebef);
}
.cards-container {
  padding: 40px 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;

  & > div {
    justify-self: center;
  }
}

@media screen and (max-width: 1300px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 900px) {
  .cards-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media screen and (max-width: 600px) {
  nav {
    gap: 20px;
    flex-direction: column;
  }
}
</style>
