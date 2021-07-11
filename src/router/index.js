import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Good from '../views/Good.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue')
  },
  //
  // {
  //   path: '/catalog/:sub1/:sub2',
  //   name: 'Catalog2',
  //   component: () => import('../views/Catalog.vue')
  // },
  // {
  //   path: '/catalog/:sub1',
  //   name: 'Catalog1',
  //   component: () => import('../views/Catalog.vue')
  // },

  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue')
  },
  {
    name: "Catalog1",
    path: '/:parentpath',
    component: () => import('../views/Catalog.vue')

  },
  {
    name: "Goods",
    path: '/goods/:parentpath',
    component: () => {
      console.log('../views/Goods.vue');
      return import('../views/Goods.vue')
    },
  },
  {
    name: "Good",
    path: '/good/:id',
    component: Good
  },
  {
    path: '/garbage',
    name: 'Garbage',
    component: () => import('../views/Garbage.vue')
  },
  {
    // 404 ошибка если страничка не найдена
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
