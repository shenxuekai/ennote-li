<template>
  <div class="bloghome">
    <h2>my Page</h2>
    <span>标签</span>
    <button @click="networkRequest">网络请求</button>
  </div>
</template>

<script>
export default {
  name: "BlogHome",

}
</script>

<style scoped>
/*h2{*/
/*  text-align: center;*/
/*}*/
.bloghome{
  width: 100%;
  height: 100%;
  background-color: hotpink;
  background-size: 100%;
}
</style>
