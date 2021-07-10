import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import('../views/Catalog.vue'),
    children: [{
      name: "Catalog1",
      path: ':parentpath',
      component: () => import('../views/Catalog.vue')

    }]
  },
  {
    name: "Goods",
    path: '/goods/:parentpath',
    component: () => import('../views/Goods.vue')
  },
  {
    path: '/garbage',
    name: 'Garbage',
    component: () => import('../views/Garbage.vue')
  },
  {
    // 404 ошибка если страничка не найдена
    path: '/:pathMatch(.*)*',
    redirect: '/' /*переадресация*/
    // component:()=>import('../views/NotFound.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
