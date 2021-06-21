<template>
  <div class="loginCss">
    <div class="loginDiv">
      <h2><strong>Vue</strong>登录</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstPage",
  components:{
  }
}
</script>

<style scoped lang="scss">
$firstBgi: url("../../assets/img/firstbgi.jpg");
.loginCss{
  height: 100%;
  background-size: 100% 100%;
  background-image: $firstBgi;
  //display: flex;
}
.loginDiv{
  background-color: rgba(255,255,255,0.9);
  text-align: center;
  height: 500px;
  width: 500px;
  max-height: 600px;
  //padding-top: 50px;
  margin: 0 auto;
  //vertical-align: middle;
  border-radius: 15px 15px 15px 15px;
  border: 1px solid  rgba(128,138,135);
}
</style>
