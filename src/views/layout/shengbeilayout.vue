<template>
  <div id="shengbeilayout">
    <div class="header hfb">header</div>
    <div id="container">
      <div id="center" class="column">
        <h2>title 1</h2>
        <p>我是处于中间位置的列，我是处于中间位置的列，我是处于中间位置的列，我是处于中间位置的列，</p>
      </div>
      <div id="left" class="column">
        <h2>title left</h2>
        <p>我是左边的侧边栏，我是左边的侧边栏，我是左边的侧边栏，我是左边的侧边栏，我是左边的侧边栏，</p>
      </div>
      <div id="right" class="column">
        <h2>title right</h2>
        <p>我是右边的侧边栏，我是右边的侧边栏，我是右边的侧边栏，我是右边的侧边栏，我是右边的侧边栏，</p>
      </div>
    </div>
    <div class="footer hfb">footer</div>
  </div>
</template>

<script>
export default {
  name: "shengbeilayout"
}
</script>

<style scoped>
#shengbeilayout{
  width: 100%;
  height: 100%;
  min-width: 550px;
}
#container{
  padding-left: 200px;
  padding-right: 150px;
}
#container .column{
  float: left;
}
#center{
  width: 100%;
  background-color: lightpink;
}
#left{
  width: 200px;
  margin-left: -100%;
  position: relative;
  right: 200px;
  background-color: lightblue;
}
#right{
  width: 150px;
  margin-right: -150px;
  background-color: lightgreen;
}
.column{
  padding-top: 20px;
  padding-bottom: 20px;
}
.hfb{
  width: 100%;
  text-align: center;
  background-color:lightsteelblue;
  height: 33px;
  line-height: 33px;
}
.footer{
  clear: both;
}
p{
  padding-left: 10px;
  padding-right: 10px;
}
h2{
  text-align: center;
}
</style>
