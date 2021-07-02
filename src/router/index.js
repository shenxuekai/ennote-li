import { createRouter, createWebHistory } from 'vue-router'
//懒加载
const Home= () => import('../views/Home.vue')
const Login= () => import("../views/Login")
const  FirstPage= ()=> import("../views/blogviews/FirstPage")
const qqZoneLink=()=> import("../views/interesting/qqZoneLink")
// import Home from '../views/Home.vue'
// import Login from "../views/Login";
// import FirstPage from "../views/blogviews/FirstPage";

const routes = [
  {
    path: '/',
    // redirect: '/login'
    redirect: '/qqZoneLink'
  },
  {
    path: '/qqZoneLink',
    component: qqZoneLink
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
