import { createRouter, createWebHistory } from 'vue-router'
import vLeague from '../views/v-league.vue'

const routes = [
  {
    path: '/',
    name: 'league',
    component: vLeague
  },
  {
    path: '/teams',
    name: 'teams',
    component: () => import('../views/v-teams.vue')
  },
  {
    path: '/matches',
    name: 'matches',
    component: () => import('../views/v-matches.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
