<template>
  <div id="container">
    <div class="header">
<!--      {{x +"-"+y}}-->
      {{"分辨率: "+ch+"-"+cw}}<br>
      {{"标记数组"+arrLight}}
    </div>
    <div>
      <button @click="gameStart">开始</button>
      <button @click="gameOverMark = false">结束</button>
    </div>
    <div class="gameArea">
      <li @click="clickItem(0)" :class="{'choosed':(arrLight[0]==1)}">1</li>
      <li @click="clickItem(1)" :class="{'choosed':(arrLight[1]==1)}">2</li>
      <li @click="clickItem(2)" :class="{'choosed':(arrLight[2]==1)}">3</li>
<!--      <li @click="clickItem(3)">4</li>-->
<!--      <li @click="clickItem(4)">5</li>-->
<!--      <li @click="clickItem(5)">6</li>-->
    </div>
  </div>
</template>

<script>
import Worker from "../../otherjs/WebWorker/webthread.worker"
export default {
  name: "FirstPage",
  components:{
  },
  data(){
    return{
      x:0,
      y:0,
      ch:0,
      cw:0,
      hitMouse:{
        gameOverMark:false,
        changeTime:1000,
        arrLight:[0,0,0,0,0,0]
      },
      worker:null,

    }
  },
  mounted() {
    this.ch = document.body.clientHeight;
    this.cw = document.body.clientWidth;
    this.worker = this.$worker.create()
    .then(result =>{
      console.log(result)
    })
    .catch(e=>{
      console.error(e)
    })
  },
  methods:{
    touchStart(e){
      // console.log("点击了"+e.targetTouches[0].clientX +"-"+ e.targetTouches[0].clientY);
      this.x=e.x;
      this.y=e.y;
    },
    touchMove(e){
      this.x=e.x;
      this.y=e.y;
    },
    clickItem(num){
      console.log("点击"+num);
      if(this.hitMouse.arrLight[num]=1){
        this.hitMouse.arrLight[num]=0;
      }else {
        // this.arrLight[num]=1;
      }

    },
    gameStart(){
      var w;
      let x;
      this.hitMouse.gameOverMark=false;
    }
  }
}
</script>

<style scoped lang="scss">
#container{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  //background-color: deepskyblue;
}
.header{
  width: 100%;
  height: 49px;
  text-align: center;
  //background-color: greenyellow;
  box-shadow: 0px 1px 0px 0px #e5e5e5;
}
li{
  list-style-type: none;
  text-align: center;
  line-height: 50px;
  border: 1px solid black;
}
.gameArea{
  //background-color: #246183;
  width: 100px;
  margin:100px auto;
}
.choosed{
  background-color: hotpink;
}
</style>
