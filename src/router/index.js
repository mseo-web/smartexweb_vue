import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'main',
    },
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      layout: 'main',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {
      layout: 'main',
    },
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/services',
    name: 'services',
    meta: {
      layout: 'main',
    },
    component: () => import('../views/Services.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    meta: {
      layout: 'main',
    },
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/projects/:id',
    name: 'projectDetails',
    meta: {
      layout: 'main',
    },
    component: () => import('../views/Project.vue')
  },
  // {
  //   path: '/project',
  //   name: 'Project',
  //   meta: {
  //     layout: 'main',
  //   },
  //   component: () => import('../views/Project.vue')
  // },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'login',
    },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'AdminHome',
    component: () => import('../views/admin/AdminHome.vue'),
    meta: {
       layout: 'panel',
    }
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: () => import('../views/admin/Dashboard.vue'),
    meta: {
       layout: 'panel',
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
