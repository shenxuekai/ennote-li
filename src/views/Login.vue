<template>
    <login-component>系统登录界面</login-component>
</template>

<script>
import LoginComponent from "components/LoginComponent";
import Tips from "../components/tips/Tips";
export default {
  name: "Login",
  components:{
    LoginComponent,
    Tips
  }
}
</script>
