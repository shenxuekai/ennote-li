<template>
  <div class="loginCss" >
    <tips :options="options" @close="closeTip" @open="openTip"></tips>
    <div id="loginDiv">
      <h2><slot>{{titleOfLogin}}</slot></h2>
      <div>
        <input type="text" v-model="managerLocal.user" maxlength="12" placeholder="账号" onkeyup="value=value.replace(/[\W]/g,'')">
      </div>
      <div>
        <input type="password" v-model="managerLocal.pwd" placeholder="密码" maxlength="12">
      </div>
      <div>
        <input type="submit" @click="submit" style="height: 35px;width: 60px;font-size: small" value="登录">
      </div>
    </div>
  </div>
</template>

<script>
import Tips from "./tips/Tips";
import {request} from "../network/request";
export default {
  name: "LoginComponent",
  data() {
    return {
      managerLocal:{
        user:'',
        pwd:''
      },
      //定义要传入子组件tips中的对象
      options: {
        show: true,
        closeTime: 0,
        content: this.$store.state.loginPage.loginTopRightTip
      },
    }
  },
  computed:{
    titleOfLogin(){
      return this.$store.state.loginPage.title
    }
  },
  created() {
    // let t=this.options.closeTime / 1000
    // this.options.content=;
  },
  components:{
    Tips
  },
  methods:{
    submit(){
      request(
          {url:"https://mobile-ms.uat.homecreditcfc.cn/mock/60d1b0ad4a9639001d427eb6/managerlist"},
          (res)=>{
            res=res.data;
            const data=res.data;
            // console.log(data[0].user);
            // console.log(data[0].pwd);
            for(let i=0;i<data.length;i++){
              if(this.managerLocal.user===data[i].user&&this.managerLocal.pwd===data[i].pwd){
                alert("登录成功，您所使用的用户名为“"+this.managerLocal.user+"”");
                this.$router.push('/home');
              }
            }
          },
          (rej)=>{
            console.log(rej);
            alert("请求失败，失败信息打印在控制台")
          }
      );
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
  background-color: rgba(144,238,144,0.5);
  background-size: cover;
  //line-height: 80px;
  margin:auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-content: center;
}
#loginDiv{
  width: 50%;
  min-width: 280px;
  height: 270px;
  display: flex;
  flex-direction: column;
  background-color: rgba(200,200,200,.5);
  position: relative;
  top: 25%;
  border-radius: 10px 10px 10px 10px ;
}
input{
  width: 50%;
  max-width: 230px;
  margin-bottom: 10px;
  margin-top: 10px;
}
h2{
  line-height: 80px;
  margin-bottom:20px;
}
</style>
