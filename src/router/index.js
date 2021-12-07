/*
 * @Author: Mr.Tian
 * @Date: 2021-10-20 11:02:30
 * @LastEditTime: 2022-01-12 14:39:21
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
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import(/* webpackChunkName: "work" */ '../views/Work.vue')
  },
  {
    path: '/notes',
    name: 'Notes',
    component: () => import(/* webpackChunkName: "notes" */ '../views/Notes.vue')
  },
  {
    path: '/links',
    name: 'Links',
    component: () => import(/* webpackChunkName: "links" */ '../views/Links.vue')
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import(/* webpackChunkName: "music" */ '../views/Music.vue')
  },
  {
    path: '/blogDetail',
    name: 'BlogDetail',
    component: () => import(/* webpackChunkName: "blogDetail" */ '../views/blog/blogDetail.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
