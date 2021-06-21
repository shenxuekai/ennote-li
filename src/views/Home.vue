<template>
  <div class="home">
    <top-bar></top-bar>
    <div class="row">
      <side-bar></side-bar>
      <content></content>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import TopBar from "components/TopBar";
import SideBar from "components/SideBar";
import Content from "components/Content";
import Bottom from "components/Bottom";
export default {
  name: 'Home',
  components: {
    TopBar,
    SideBar,
    Content,
    Bottom
  }
}
</script>
<style scoped>
* {
  box-sizing: border-box;
}
/* 列后面清除浮动 */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
