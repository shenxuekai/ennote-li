import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login";
import FirstPage from "../views/blogviews/FirstPage";

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/firstpage',
    component: FirstPage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
