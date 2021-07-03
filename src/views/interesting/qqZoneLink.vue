<template>
  <div class="aini">
      <div class="texta">
        您的好友<span style="color: blue">***</span>给您分享了一组照片,点击<router-link to="/qqZone">这里</router-link>查看
      </div>
  </div>
</template>

<script>
export default {
  name: "qqZoneLink",
  methods:{
    zoneClick(){
      this.$router.replace("/qqZone")
    }
  }
}
</script>

<style scoped>
.aini{
}
.texta{
  text-align: center;
  margin: 20% auto;
}
img{
  width: 244px;

}
</style>
