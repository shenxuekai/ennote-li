<template>
  <div>
    <div class="column middle">
      <h2>主区域内容</h2>
      <p>这是主内容区域</p>
    </div>

<!--    <div class="column side">-->
<!--      <h2>右侧栏</h2>-->
<!--      <p>菜鸟教程 - 学的不仅是技术，更是梦想！</p>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "Content"
}
</script>
<style scoped>
.column.middle {
  width: 50%;
}
.column {
  float: left;
  padding: 10px;
}
.column.side {
  width: 75%;
}

</style>
