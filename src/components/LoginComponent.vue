<template>
  <div class="loginCss">
    <h2><slot>登录界面</slot></h2>
    <div class="block">
      <input type="text" v-model="account" maxlength="12" style="font-size: large" placeholder="账号" onkeyup="value=value.replace(/[\W]/g,'')">
    </div>
    <div class="block">
      <input type="password" v-model="password" placeholder="密码" maxlength="12" style="font-size: large">
    </div>
    <div class="block">
      <input type="submit" @click="submit" style="height: 35px;width: 60px;font-size: medium" value="登录">
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      account:'',
      password: ''
    }
  },
  methods:{
    submit(){
      //账号密码用于网络验证，，直接跳转
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
.loginCss{
  text-align: center;
  background-image: url("../assets/img/loginbgi.jpg");
  line-height: 100px;
}
</style>
