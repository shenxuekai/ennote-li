<template>
  <div class="column side">
    <h2>左侧栏</h2>
    <li>选项1</li>
    <li>选项1</li>
    <li>选项1</li>
    <li>选项1</li>
    <li>选项1</li>
    <li>选项1</li>
  </div>
</template>

<script>
export default {
  name: "SideBar"
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.column.side {
  width: 15%;
  border-right: 1px solid;
  min-width: 100px;
}
.column {
  float: left;
  /*padding: 10px;*/
}

li{
  text-align: center;
  list-style-type: none;
  cursor: pointer;
  min-width: 70px;
  height: 50px;
  font-size: large;
  padding-top: 20px;
  margin: 0;
}
li:hover{
  background-color: lightblue;
}
</style>
