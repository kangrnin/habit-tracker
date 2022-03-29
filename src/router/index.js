import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import TodayView from '../views/TodayView.vue'
import ManageHabits from '../views/ManageHabits.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/today',
    name: 'TodayView',
    component: TodayView,
  },
  {
    path: '/manage',
    name: 'ManageHabits',
    component: ManageHabits,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
