<template>
  <div class="loginCss" >
    <tips :options="options" @close="closeTip" @open="openTip"></tips>
    <div id="loginDiv">
      <h2><slot>登录界面</slot></h2>
      <div>
        <input type="text" v-model="account" maxlength="12" placeholder="账号" onkeyup="value=value.replace(/[\W]/g,'')">
      </div>
      <div>
        <input type="password" v-model="password" placeholder="密码" maxlength="12">
      </div>
      <div>
        <input type="submit" @click="submit" style="height: 35px;width: 60px;font-size: medium" value="登录">
      </div>
    </div>
  </div>
</template>

<script>
import Tips from "./tips/Tips";
export default {
  name: "LoginComponent",
  data() {
    return {
      account: '',
      password: '',
      notifyObj: null,
      //定义要传入子组件tips中的对象
      options: {
        show: true,
        closeTime: 500,
        content: ''
      }
    }
  },
  created() {
    let t=this.options.closeTime / 1000
    this.options.content='点击后'+t+'秒后消失,窗口过小时隐藏';
  },
  components:{
    Tips
  },
  methods:{
    submit(){
      //账号密码用于网络验证，，直接跳转
      // this.$router.push('/home');
      //手动改变tip是否显示
      // this.options.show= !this.options.show
      alert(this.$store.state.counter)
      // this.$router.push('/home');
    },
    closeTip(){
      setTimeout(()=>{
        // console.log(this);
        this.options.show=false;
      },this.options.closeTime)
    },
    openTip() {
      this.options.show=true;
    }
  }
}
</script>

<style scoped lang="scss">
.loginCss{
  height:100%;
  width: 100%;
  text-align: center;
  background: url("../assets/img/loginbgi.jpg") 50% no-repeat;
  background-size: cover;
  line-height: 100px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-content: center;
}
#loginDiv{
  width: 50%;
  height: 50%;
  min-width: 343px;
  display: flex;
  flex-direction: column;
}
input{
  width: 50%;
  max-width: 230px;
}
</style>
