import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
require('assets/css/base.css')
const app = createApp(App)
app.use(router).mount('#app')




// https://www.runoob.com/try/try.php?filename=trycss_website_layout_footer
