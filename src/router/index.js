import { createRouter, createWebHistory } from 'vue-router'
import Menu from '../views/menu/Menu.vue'
import SubMenu from '../views/menu/SubMenu.vue'
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
    path: '/menu/:submenu',
    name: 'SubMenu',
    component: SubMenu,
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
