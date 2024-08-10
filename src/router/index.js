import { createRouter, createWebHistory } from 'vue-router'
import WorkPage from '../views/WorkPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WorkPage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutPage.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesPage.vue')
    },
    {
      path: '/ideas',
      name: 'ideas',
      component: () => import('../views/IdeasPage.vue')
    },
    {
      path: '/careers',
      name: 'careers',
      component: () => import('../views/CareersPage.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactPage.vue')
    },
  ]
})

export default router
