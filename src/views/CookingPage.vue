<template>
  <Header />
  <div class="wrapper">
    <h1>{{ dishCards[activeID].title }}</h1>
    <p>{{ dishCards[activeID].description }}</p>
    <div class="flex-container">
      <DishLogo class="dish-logo" :dish-image="dishCards[activeID].dishImage" />
      <IngredientsList :ingredients="dishCards[activeID].ingredients" />
    </div>
    <NutrientsBlock
      :proteins-name="nutrients.proteins.title"
      :proteins-percentage="nutrients.proteins.percentage"
      :proteins-weight="nutrients.proteins.weight"
      :fats-name="nutrients.fats.title"
      :fats-percentage="nutrients.fats.percentage"
      :fats-weight="nutrients.fats.weight"
      :carbohydrates-name="nutrients.carbohydrates.title"
      :carbohydrates-percentage="nutrients.carbohydrates.percentage"
      :carbohydrates-weight="nutrients.carbohydrates.weight"
      :calories="dishCards[activeID].calories"
    />
    <h1>Cooking time: {{ dishCards[activeID].timeToCook }}</h1>
    <div class="instruction-container">
      <div
        v-for="n in cookRecipes[activeID].stepByStepInstruction.length"
        :key="n"
      >
        <h3>Step {{ n }}</h3>
        <img
          class="stepByStep-img"
          :src="require(`@/assets/img/steps/${activeID}${n}.jpg`)"
          alt=""
        />
        <p>{{ stepByStepInstruction(activeID, n - 1) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import IngredientsList from "@/components/IngredientsList.vue";
import DishLogo from "@/components/DishLogo.vue";
import NutrientsBlock from "@/components/NutrientsBlock.vue";

import { useStore } from "@/stores/index.js";
import { useCookingStore } from "@/stores/cookStore.js";
import router from "@/router/index";

const id = router.currentRoute.value.params.id;

localStorage.setItem("activeID", id);

const activeID = localStorage.getItem("activeID");

const cookingStore = useCookingStore();

const cookRecipes = cookingStore.cookRecipes;

const store = useStore();

const dishCards = store.dishCards;

const stepByStepInstruction = (cookRecipeIndex, instructionIndex) => {
  return cookRecipes[cookRecipeIndex].stepByStepInstruction[instructionIndex];
};

const nutrients = cookRecipes[activeID].nutrients;

console.log(nutrients);
</script>

<style scoped lang="scss">
.wrapper {
  background: linear-gradient(#f5f9fa, #e2ebef);
}

h1 {
  padding-top: 40px;
  text-align: center;
}
p {
  padding-top: 20px;
  text-align: center;
}
.flex-container {
  display: flex;
  flex-direction: row;
  margin: 20px 40px;
  justify-content: space-between;
  align-items: center;
  & > img {
    border-radius: 10px;
    width: 50%;
    height: 100%;
  }
  & > ul {
    font-size: 1.4em;
    align-items: start;
    width: 40%;
  }
}

.instruction-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  padding: 40px;
  & > div {
    background: var(--cardBG);
    border-radius: 10px;
    & > h3 {
      padding: 20px;
      text-align: center;
    }
    & > img {
      width: 100%;
      height: 300px;
    }
    & > p {
      padding: 20px;
    }
  }
}
h3 {
  font-size: 1.2em;
  color: var(--buttonBG);
}

.dish-logo {
  width: 400px;
  height: 300px;
}
.stepByStep-img {
  width: 200px;
  height: 160px;
}
@media screen and (min-width: 1440px) {
  .instruction-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 1024px) {
}
@media screen and (max-width: 768px) {
  .instruction-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media screen and (max-width: 600px) {
  .flex-container > ul {
    font-size: 1em;
  }
}
@media screen and (max-width: 425px) {
  .flex-container > ul {
    font-size: 10px;
  }
}
</style>
