<template>
  <!--      class="topBar"-->
  <div>
    <div style="background-color: #f1f1f1; padding: 20px; text-align: center;"><slot>标题</slot></div>
    <div class="topnav">
      <a href="#">链接</a>
      <a href="#">链接</a>
      <a href="#">链接</a>
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
  display: block;
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
</style>
