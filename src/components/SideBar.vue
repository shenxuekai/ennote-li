<template>
  <div class="column side">
    <h2>左侧栏</h2>
    <p>这是左侧栏</p>
  </div>
</template>

<script>
export default {
  name: "SideBar"
}
</script>

<style scoped>
.column.side {
  width: 25%;
}
.column {
  float: left;
  padding: 10px;
}
</style>
