<template>
  <div id="observer-target-appear" class="container">
    <h1>Per 100 gram of dish:</h1>
    <div class="nutrients__flex-container">
      <div>
        <h3>
          {{ props.proteinsName }}
          <strong>{{ props.proteinsPercentage }}%</strong>
        </h3>
        <h2 class="h2__proteins">{{ props.proteinsWeight }} gram</h2>
        <div :class="{ 'block-appear': isBlockVisible }" class="nutrient-block">
          <div
            :style="dynamicHeight(props.proteinsPercentage)"
            class="nutrient-block_proteins"
          ></div>
        </div>
      </div>
      <div>
        <h3>
          {{ props.fatsName }} <strong>{{ props.fatsPercentage }}%</strong>
        </h3>
        <h2 class="h2__fats">{{ props.fatsWeight }} gram</h2>
        <div :class="{ 'block-appear': isBlockVisible }" class="nutrient-block">
          <div
            :style="dynamicHeight(props.fatsPercentage)"
            class="nutrient-block_fats"
          ></div>
        </div>
      </div>
      <div>
        <h3>
          {{ props.carbohydratesName }}
          <strong>{{ props.carbohydratesPercentage }}%</strong>
        </h3>
        <h2 class="h2__carbohydrates">{{ props.carbohydratesWeight }} gram</h2>
        <div :class="{ 'block-appear': isBlockVisible }" class="nutrient-block">
          <div
            :style="dynamicHeight(props.carbohydratesPercentage)"
            class="nutrient-block_carbohydrates"
          ></div>
        </div>
      </div>
      <div>
        <div class="calories-block">{{ props.calories }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { ref, onMounted } from "vue";

const isBlockVisible = ref(false);

onMounted(() => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isBlockVisible.value = true;
        console.log("appear");
        observer.unobserve;
      } else {
        isBlockVisible.value = false;
        console.log("disappear");
      }
    });
  }, observerOptions);

  observer.observe(document.querySelector("#observer-target-appear"));
});

const props = defineProps({
  proteinsName: {
    required: true,
    default: "proteinsName",
  },
  proteinsPercentage: {
    required: true,
    default: "proteinsPercentage",
  },
  proteinsWeight: {
    required: true,
    default: "proteinsWeight",
  },
  fatsName: {
    required: true,
    default: "fatsName",
  },
  fatsPercentage: {
    required: true,
    default: "fatsPercentage",
  },
  fatsWeight: {
    required: true,
    default: "fatsWeight",
  },
  carbohydratesName: {
    required: true,
    default: "carbohydratesName",
  },
  carbohydratesPercentage: {
    required: true,
    default: "carbohydratesPercentage",
  },
  carbohydratesWeight: {
    required: true,
    default: "carbohydratesWeight",
  },
  calories: {
    required: true,
    default: "calories",
  },
});

const dynamicHeight = (arg) => {
  return `height: calc(${arg}% + 10%)`;
};
</script>

<style scoped lang="scss">
.container {
  padding: 20px 40px;
}
.nutrients__flex-container {
  display: flex;
  overflow: hidden;
  border-bottom: 4px solid var(--buttonBG);
  flex-direction: row;
  align-items: flex-end;
  & > div {
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
  }
  & > div:last-child {
    margin-left: auto;
    align-self: center;
  }
}

.nutrient-block {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100px;
  width: 80px;
  transition: all 1s;
  transform: translateY(100%);

  &_proteins {
    background: linear-gradient(
      110deg,
      rgb(0, 0, 255),
      rgb(0, 0, 125),
      rgb(0, 0, 255),
      rgb(0, 0, 125),
      rgb(0, 0, 255),
      rgb(0, 0, 125),
      rgb(0, 0, 255),
      rgb(0, 0, 125),
      rgb(0, 0, 255),
      rgb(0, 0, 125)
    );
    width: 100%;
    height: 10%;
  }
  &_fats {
    background: linear-gradient(
      110deg,
      rgb(255, 0, 0),
      rgb(125, 0, 0),
      rgb(255, 0, 0),
      rgb(125, 0, 0),
      rgb(255, 0, 0),
      rgb(125, 0, 0),
      rgb(255, 0, 0),
      rgb(125, 0, 0),
      rgb(255, 0, 0),
      rgb(125, 0, 0)
    );
    width: 100%;
    height: 70%;
  }
  &_carbohydrates {
    background: linear-gradient(
      110deg,
      rgb(0, 255, 0),
      rgb(0, 125, 0),
      rgb(0, 255, 0),
      rgb(0, 125, 0),
      rgb(0, 255, 0),
      rgb(0, 125, 0),
      rgb(0, 255, 0),
      rgb(0, 125, 0),
      rgb(0, 255, 0),
      rgb(0, 125, 0)
    );
    width: 100%;
    height: 50%;
  }
}
.calories-block {
  color: var(--buttonBG);
  font-size: 1.2em;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid var(--buttonBG);
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 1em;
  margin-bottom: 20px;
}
.h2 {
  &__proteins {
    color: rgb(0, 0, 125);
  }
  &__fats {
    color: rgb(125, 0, 0);
  }
  &__carbohydrates {
    color: rgb(0, 125, 0);
  }
}
strong {
  color: grey;
  font-size: 0.7em;
}
.block-appear {
  transform: none;
}
@media screen and (max-width: 768px) {
  .nutrients__flex-container {
    font-size: 0.8em;
  }
}
@media screen and (max-width: 600px) {
  .nutrients__flex-container {
    font-size: 0.5em;
  }
  .nutrient-block {
    width: 40px;
  }
  .calories-block {
    width: 50px;
    height: 50px;
  }
}

@media screen and (max-width: 400px) {
  .nutrients__flex-container {
    font-size: 0.4em;
  }
}
@media screen and (max-width: 375px) {
  .nutrients__flex-container {
    font-size: 0.3em;
  }
  .calories-block {
    border: 2px solid var(--buttonBG);
    width: 30px;
    height: 30px;
  }
}
</style>
