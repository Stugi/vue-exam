import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue')
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue')
  },
  {
    path: '/garbage',
    name: 'Garbage',
    component: () => import('../views/Garbage.vue')
  }   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
