<!--tips组件接受一个options对象，根据options中show的真假来显示content的内容，若发生点击，则向父组件上传事件，由父组件处理-->
<template>
  <div :class="['tipsArea','tipsOnly']" v-if="options.show&& (options.content!='')" @click="closeMe">
<!--    options.content内容为空时不展示-->
    <p class="content">{{options.content}}</p>
  </div>
  <span v-else>
    <a @click="$emit('open')">tips</a>
  </span>
</template>

<script>
export default {
  name: "Tips",
  props:{
    //接收一个对象，该对象至少包含了show，content属性
    options:{
      type: Object,
      default: {}
    }
  },
  methods:{
    closeMe(){
        this.$emit('close');
    }
  }

}
</script>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
}
.tipsArea{
  border-radius: 10px 10px 10px 10px;
  position: fixed;
  right: 10px;
  top:10px;
  background-color: white;
  font-size: small;
  width: 25%;
  max-width: 300px;
  min-width: 260px;
}
.content{
  line-height: normal;
  margin: 1rem 1rem;
  text-align: left;
}
//窗口过小则隐藏本组件，部分浏览器可能不支持
@media screen and (max-width: 768px) {
  div{
    display: none;
  }
}
@media screen and (max-height: 400px) {
  div{
    display: none;
  }
}
a{
  position: fixed;
  right: 10px;
  top:10px;
  font-size: small;
  //color: lightblue;
  line-height: normal;
  font-weight: 300;
  text-decoration: underline;
  cursor: pointer;
}
</style>
