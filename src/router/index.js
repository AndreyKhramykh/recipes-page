import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import MainPage from '../views/MainPage.vue'
import RecipesPage from '../views/RecipesPage.vue'
import AboutPage from '../views/AboutPage.vue'
import CookingPage from '../views/CookingPage.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '/',
    name: 'mainPage',
    component: MainPage
  },
  {
    path: '/recipes',
    name: 'recipesPage',
    component: RecipesPage
  },
  {
    path: '/about',
    name: 'aboutPage',
    component: AboutPage
  },
  {
    path: '/cooking/:id',
    name: 'cookingPage',
    component: CookingPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
})

export default router
