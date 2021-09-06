<template>
  <div id="shuangfeiyilayout">
    <div class="header hfb">header</div>
    <div id="container" class="column">
      <div id="center" >
        <h2>title 1</h2>
        <p>我是处于中间位置的列，我是处于中间位置的列，我是处于中间位置的列，我是处于中间位置的列，</p>
      </div>
    </div>
      <div id="left" class="column">
        <h2>title left</h2>
        <p>我是左边的侧边栏，我是左边的侧边栏，我是左边的侧边栏，我是左边的侧边栏，我是左边的侧边栏，</p>
      </div>
      <div id="right" class="column">
        <h2>title right</h2>
        <p>我是右边的侧边栏，我是右边的侧边栏，我是右边的侧边栏，我是右边的侧边栏，我是右边的侧边栏，</p>
      </div>

    <div class="footer hfb">footer</div>
  </div>
</template>

<script>
export default {
  name: "shuangfeiyilayout"
}
</script>

<style scoped>
#shuangfeiyilayout{
  min-width: 500px;
}
.header{
  background-color: lightsteelblue;
}
#container{
  width: 100%;
}
#center{
  margin-left: 200px;
  margin-right: 150px;
  background-color: lightgreen;
}
.hfb{
  text-align: center;
}
.column{
  float: left;
}
#left{
  width: 200px;
  background-color: lightpink;
  margin-left: -100%;
}
#right{
  width: 150px;
  background-color: lightskyblue;
  margin-left: -150px;
}
.footer{
  clear: both;
  background-color: lightsteelblue;
}
</style>
