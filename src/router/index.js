import { createRouter, createWebHistory } from 'vue-router'
//懒加载
const Home= () => import('../views/Home.vue')
const Login= () => import("../views/Login")
const  FirstPage= ()=> import("../views/blogviews/FirstPage")
const qqZoneLink=()=> import("../views/interesting/qqZoneLink")
const qqZone=()=> import("../views/interesting/qqZone")

// import Home from '../views/Home.vue'
// import Login from "../views/Login";
// import FirstPage from "../views/blogviews/FirstPage";

const routes = [
  {
    path: '/',
    redirect: '/login'
    // redirect: '/qqZoneLink'
  },
  {
    path: '/qqZone',
    component: qqZone,
    meta:{
      title:"手机统一登录"
    }
  },
  {
    path: '/qqZoneLink',
    component: qqZoneLink,
    meta: {
      title: "收到一条消息"
    }
  },
  {
    path: '/firstpage',
    component: FirstPage,
    meta: {
      title: 'blog首页'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// router.beforeEach((to, from, next) => {
//   to.meta.title && (document.title = to.meta.title);
//   next()
// });
export default router
