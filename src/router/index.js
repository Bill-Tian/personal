/*
 * @Author: Mr.Tian
 * @Date: 2021-10-20 11:02:30
 * @LastEditTime: 2021-11-26 16:11:34
 * @LastEditors: Mr.Tian
 * @Description: 
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', redirect: '/home' },
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
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
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
  {
    path: '/links',
    name: 'Links',
    component: () => import(/* webpackChunkName: "about" */ '../views/Links.vue')
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import(/* webpackChunkName: "about" */ '../views/Music.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
