<template>
  <div class="loginCss">
    <h2><slot>登录界面</slot></h2>
    <div>
      <input type="text" v-model="account" maxlength="12" style="font-size: large" placeholder="账号" onkeyup="value=value.replace(/[\W]/g,'')">
    </div>
    <div>
      <input type="password" v-model="password" placeholder="密码" maxlength="12" style="font-size: large">
    </div>
    <div>
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

<style scoped lang="scss">
.loginCss{
  height:100%;
  width: 100%;
  text-align: center;
  background-image: url("../assets/img/loginbgi.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  line-height: 100px;
  margin: 0 auto;
  padding: 0;
}

</style>
