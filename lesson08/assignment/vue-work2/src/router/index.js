import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    
  },
  {
    path: '/Recipes',
    name: 'Recipes',
    // route level code-splitting
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Recipes.vue')
  },
  {
    path: '/Nutritions',
    name: 'Nutritions',
    // route level code-splitting
    
    component: () => import('../views/Nutritions.vue')
  },
  {
    path: '/MyCookbook',
    name: 'MyCookbook',
    
    component: () => import('../views/MyCookbook.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
