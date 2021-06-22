<template>
  <!--      class="topBar"-->
  <div>
    <div style="background-color: #f1f1f1; padding: 20px; text-align: center;"><slot>标题</slot></div>
    <div class="topnav">
      <a href="#">首页</a>
      <a href="#">导入</a>
      <a href="#">导出</a>
      <div class="user">
        <img src="../assets/img/user.svg" alt="" style="height: 51px;width: 35px">
      </div>
      <ul id="userMenu">
        <li>个人信息修改</li>
      </ul>


    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar"
}
</script>

<style scoped>
/* 导航条 */
.topnav {
  overflow: hidden;
  background-color: #333;
}
/* 导航链接 */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
/* 链接 - 修改颜色 */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
.user{
  display: flex;
  align-items: center;
  float: right;
}
.user:hover{
  background-color: #ddd;
}
#userMenu{
  display: none;
  position: absolute;

}
</style>
