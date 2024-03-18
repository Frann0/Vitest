import { createRouter, createWebHistory } from 'vue-router'
import UserPage from '../views/UserPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UserPage
    }
  ]
})

export default router
