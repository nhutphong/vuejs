import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoView from '../views/TodoView.vue'

import Bind from '@/components/Bind'
import BindModel from '@/components/BindModel'
import Loop from '@/components/Loop'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/todo',
    name: 'Todo',
    component: TodoView
  },
  {
    path: '/bind',
    name: 'Bind',
    component: Bind
  },
  {
    path: '/bind-model',
    name: 'BindModel',
    component: BindModel
  },
  {
    path: '/loop',
    name: 'Loop',
    component: Loop
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


// http://localhost:8080/
// http://localhost:8080/bind
// http://localhost:8080/bind-model
// http://localhost:8080/loop