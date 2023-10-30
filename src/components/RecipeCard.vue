<template>
  <div @click="changeCardSide" class="card-layout">
    <div :class="{ rotate180deg: isBackSide }" class="card">
      <div class="card_front">
        <DishLogo class="card__logo" :dish-image="props.dishImage" />
        <div class="card__info">
          <div class="card__info_calContainer card__info_subContainer">
            <CaloriesDiagram />
            <div>{{ props.calories }}</div>
          </div>
          <div class="card__info_timeContainer card__info_subContainer">
            <img class="card__clockImg" src="@/assets/img/clock.png" alt="" />
            <div>{{ props.timeToCook }}</div>
          </div>
          <h1>{{ props.dishTitle }}</h1>
          <p>{{ props.dishDescription }}</p>
        </div>
      </div>
      <div class="card_back">
        <h3>{{ props.dishTitle }}</h3>
        <ingredientsList :ingredients="props.ingredients" />
        <router-link :to="`/cooking/` + props.id">
          <StartButton title="Start cook" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import CaloriesDiagram from "@/components/CaloriesDiagram.vue";
import ingredientsList from "@/components/IngredientsList.vue";
import DishLogo from "./DishLogo.vue";
import StartButton from "./StartButton.vue";
const isBackSide = ref(false);

const changeCardSide = () => {
  isBackSide.value = !isBackSide.value;
};

const props = defineProps({
  calories: {
    required: true,
    default: "calories",
  },
  timeToCook: {
    required: true,
    default: "time",
  },
  dishTitle: {
    required: true,
    default: "title",
  },
  dishDescription: {
    required: true,
    default: "description",
  },
  dishImage: {
    required: true,
    default: "image",
  },
  ingredients: {
    required: true,
    default: "ingredients",
  },
  id: {
    required: true,
    default: "id",
  },
});
</script>

<style scoped lang="scss">
.card-layout {
  position: relative;
  width: 360px;
  height: 450px;
  cursor: pointer;
}
.card {
  position: absolute;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  border-radius: 20px;

  &_front {
    position: absolute;
    background-color: var(--cardBG);
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    backface-visibility: hidden;
  }
  &_back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-color: var(--cardBG);
    transform: rotateY(180deg);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
  }

  &__info {
    padding: 10px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;

    &_calContainer {
      grid-area: 1/1/1/1;
    }
    &_timeContainer {
      justify-self: end;
      grid-area: 1/2/1/2;
    }
    &_subContainer {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
  &__logo {
    width: 360px;
    height: 260px;
  }
  &__clockImg {
    width: 20px;
    height: 20px;
  }
}

h1 {
  text-align: center;
  font-size: 1.4em;
  grid-column: 1/3;
}
p {
  text-align: center;
  grid-column: 1/3;
}

.rotate180deg {
  transform: rotateY(180deg);
}
@media screen and (max-width: 1024px) {
  h1 {
    font-size: 1em;
  }
  .card__info_subContainer {
    font-size: 0.8em;
  }
}
@media screen and (max-width: 768px) {
  .card-layout {
    width: 300px;
  }
}
@media screen and (max-width: 600px) {
  .card-layout {
    width: 300px;
    height: 450px;
  }
}
@media screen and (max-width: 425px) {
  .card-layout {
    font-size: smaller;
    width: 90%;
    height: 450px;
  }
}
</style>
