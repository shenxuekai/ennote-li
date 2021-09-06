import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
// import VueWorker from 'vue-worker'
require('assets/css/base.css')
const app = createApp(App)
// app.use(router).use(store).use(VueWorker).mount('#app')
app.use(router).use(store).mount('#app')


// 封装axios使用
// import {request} from "./network/request";
// request(
//     {baseURL:"",timeout:5000},
//     res=>{
//       console.log(res);
//     },
//     rej=>{
//       console.log(rej);
//     }
// )





// https://www.runoob.com/try/try.php?filename=trycss_website_layout_footer
