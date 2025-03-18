import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
import GuestLayout from '../layouts/GuestLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    component: GuestLayout,
    children: [
      {
        path: '',
        name: 'login',
        component: Login
      }
    ]
  },
  {
    path: '/',
    component: AuthLayout,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      },
      {
        path: 'users',
        name: 'users',
        component: NotFound
      },
      {
        path: 'reports',
        name: 'reports',
        component: NotFound
      },
      {
        path: 'documents',
        name: 'documents',
        component: NotFound
      },
      {
        path: 'calendar',
        name: 'calendar',
        component: NotFound
      },
      {
        path: 'orders',
        name: 'orders',
        component: NotFound
      },
      {
        path: 'settings',
        name: 'settings',
        component: NotFound
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router