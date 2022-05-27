import { createRouter, createWebHashHistory } from 'vue-router'

import TopCategory from '@/views/category'
import SubCategory from '@/views/category/sub'

const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home/index')
const Login = () => import('@/views/login/login')

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/category/:id',
        component: TopCategory
      },
      { path: '/category/sub/:id', component: SubCategory }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
