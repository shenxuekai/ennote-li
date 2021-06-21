<template>
  <div class="loginCss">
    <div class="loginDiv">
      <h2><strong>Vue</strong>登录sdfsfdsdfsdf</h2>
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
$colorBlue:default;
$firstBgi: url("../../assets/img/firstbgi.jpg");
.loginCss{
  height: 100%;
  //background-color: $colorBlue;
  background-size: 100% 100%;
  background-image: $firstBgi;
  display: flex;
}
.loginDiv{
  background-color: #f2f2f2;
  text-align: center;
  height: 500px;
  width: 500px;
  margin: 0 auto

}
</style>
