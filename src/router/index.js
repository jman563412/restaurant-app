import { createRouter, createWebHistory } from 'vue-router'
import Menu from '../views/menu/Menu.vue'
import Entrees from '../views/Entrees.vue'
import Sides from '../views/Sides.vue'
import AlcoholicDrinks from '../views/AlcoholicDrinks.vue'
import NonAlcoholicDrinks from '../views/NonAlcoholicDrinks.vue'
import Appetizers from '../views/Appetizers.vue'
import Desserts from '../views/Desserts.vue'
import Games from '../views/Games.vue'
import Music from '../views/Music.vue'
import Checkout from '../views/Checkout.vue'
import Help from '../views/Help.vue'
import Refill from '../views/Refill.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    redirect: '/menu'
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/menu/Entrees',
    name: 'Entrees',
    component: Entrees,
    props: true
  },
  {
    path: '/menu/Sides',
    name: 'Sides',
    component: Sides,
    props: true
  },
  {
    path: '/menu/Alcoholic-Drinks',
    name: 'AlcoholicDrinks',
    component: AlcoholicDrinks,
    props: true
  },
  {
    path: '/menu/Non-Alcoholic-Drinks',
    name: 'NonAlcoholicDrinks',
    component: NonAlcoholicDrinks,
    props: true
  },
  {
    path: '/menu/Desserts',
    name: 'Desserts',
    component: Desserts,
    props: true
  },
  {
    path: '/menu/Appetizers',
    name: 'Appetizers',
    component: Appetizers,
    props: true
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/refill',
    name: 'Refill',
    component: Refill
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
