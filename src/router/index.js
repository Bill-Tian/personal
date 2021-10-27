/*
 * @Author: Mr.Tian
 * @Date: 2021-10-20 11:02:30
 * @LastEditTime: 2021-10-20 11:26:49
 * @LastEditors: Mr.Tian
 * @Description: 
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import(/* webpackChunkName: "about" */ '../views/Work.vue')
  },
  {
    path: '/notes',
    name: 'Notes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Notes.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
