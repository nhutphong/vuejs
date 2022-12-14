import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HookView from '../views/HookView.vue'
import ClockView from '../views/ClockView.vue'
import TestView from '../views/TestView.vue'

import Bind from '@/components/Bind'
import BindModel from '@/components/BindModel'
import Loop from '@/components/Loop'
import Slot from '@/components/SlotParent'
import Tab from '@/components/Tab'

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
    path: '/hook',
    name: 'Hook',
    component: HookView
  },
  {
    path: '/clock',
    name: 'Clock',
    component: ClockView
  },
  {
    path: '/test',
    name: 'Test',
    component: TestView
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
  {
    path: '/slot',
    name: 'Slot',
    component: Slot
  },
  {
    path: '/tab',
    name: 'Tab',
    component: Tab
  },
 
] //end router

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


// http://localhost:8080/
// http://localhost:8080/bind
// http://localhost:8080/bind-model
// http://localhost:8080/loop