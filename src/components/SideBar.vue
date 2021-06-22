<template>
  <div class="column side">
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
  font-size: medium;
}
li:hover{
  background-color: rgb(51, 51, 51);

}
</style>
