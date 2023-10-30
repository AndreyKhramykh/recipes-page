/* eslint-disable */
import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    dishCards: [
      {
        id: 0,
        title: "PORK SHASHLIK IN A MULTICOOKER",
        description: "Juicy, aromatic, delicious, without leaving home!",
        calories: "213 cal",
        timeToCook: "5 hours",
        dishImage: "dish1.jpg",
        ingredients: ['pork', 'onion', 'table vinegar', 'vegetable oil', 'dry spices', 'salt']
      },
      {
        id: 1,
        title: "SOUP WITH POTATOES AND CHICKEN DRUMBLINGS",
        description: "Delicious and rich, everyone will ask for supplements!",
        calories: "62 cal",
        timeToCook: "50 minutes",
        dishImage: "dish2.jpg",
        ingredients: ['chicken', 'Potato', 'onion', 'carrot', 'bell pepper', 'water', 'vegetable oil', 'salt', 'dry spices']
      },
      {
        id: 2,
        title: "CLASSIC RASSOLNIK WITH PEARLY AND BEEF",
        description:
          "Incredibly tasty and aromatic. You'll definitely want more!",
        calories: "48 cal",
        timeToCook: "2.30 hours",
        dishImage: "dish3.jpg",
        ingredients: ['beef', 'water', 'carrot', 'onion', 'bay leaf','peppercorns', 'pearl barley', 'pickle (cucumber)', 'tomato paste', 'potato', 'salted cucumbers', 'vegetable oil', 'salt']
      },
      {
        id: 3,
        title: "CLASSIC CAESAR SALAD WITH CHICKEN",
        description: "Original, classic, delicious, for any occasion!",
        calories: "168 cal",
        timeToCook: "30min",
        dishImage: "dish4.jpg",
        ingredients: ['chicken fillet', 'Iceberg lettuce', 'cherry tomatoes','loaf', 'parmesan', 'garlic', 'vegetable oil', 'salt', 'ground black pepper', 'sugar', 'mustard', 'eggs']
      },
      {
        id: 4,
        title: 'JUICY CLASSIC MINT MEAT CUTLETS IN A FRYING PAN',
        description: "Tasty, satisfying, soft, for every day.",
        calories: "272 cal",
        timeToCook: "1 hour",
        dishImage: "dish5.jpg",
        ingredients: ['minced meat', 'loaf', 'milk', 'onion', 'breadcrumbs', 'salt', 'dry spices', 'vegetable oil']
      },
      {
        id: 5,
        title: 'CLASSIC COOK CHEESE PANS IN A FRYING PAN',
        description: "Delicate, fluffy, airy, whipped up.",
        calories: "319 cal",
        timeToCook: "30 minutes",
        dishImage: "dish6.jpg",
        ingredients: ['cottage cheese', 'eggs', 'salt', 'sugar', 'wheat flour', 'vegetable oil']
      },
    ],
    activeID: 0,
  }),
});


