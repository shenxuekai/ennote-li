import { createStore } from 'vuex'
//1安装插件
// Vue.use(Vuex)
//2创建对象
const store=new createStore({
  state:{
    counter:100,
    //login相关显示
    loginPage:{
      title:'登陆界面',
      loginTopRightTip:'用户名admin，密码admin(单击以关闭)',
      loginSuccessTip:''
    }
  },
  mutations:{
    inc(s,p){
      s.counter+=p.amount
    },
    dec(s,p){
      s.counter-=p.amount
    }
  },
  getters:{
    // myGetter(state){
    //   return (state.counter>130)?state.counter:130
    // },
    // myGetter2(state,getter){
    //   return (state.counter>getter.myGetter)?(state.counter-getter.myGetter):(getter.myGetter-state.counter)
    // },
    // myGetter3(state){
    //   return function (amount) {
    //     return (state.counter>amount)? state.counter:amount
    //   }
    // },
  }
})
//3导出
export default store
