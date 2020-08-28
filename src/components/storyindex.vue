<template>
  <main>
    <div id="lun">
      <span class="left" @click="left"></span>
      <span class="right" @click="right"></span>
      <mt-swipe :auto="0" ref="swipe">
        <mt-swipe-item v-for="(item,index) in storylist"><img :src="item" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <div id="update">
      <div id="title"><i></i><span>最近更新</span></div>
      <div id="srollbox">
        <ul>
          <li v-for="item in updatelist">
            <i><img :src="item.src" alt=""></i>
            <div id="con">
              <span class="video">{{item.name}}</span>
              <span class="small"><img src="../assets/images/icon-new.png" alt="" width="25px"></span><br>
              <span>{{item.con}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div id="con1"><img src="../assets/images/story6.png" alt=""></div>
    <div id="con2"><img src="../assets/images/story7.png" alt=""></div>
    <div id="con3"><img src="../assets/images/story8.jpg" alt=""></div>
    <div id="last"></div>
  </main>
</template>
<script>
export default {
  data(){
    return{
      storylist:[
        './src/assets/images/story1.png',
        './src/assets/images/story2.png',
        './src/assets/images/story3.png',
        './src/assets/images/story4.png',
        './src/assets/images/story5.png'
      ],
      updatelist:[
        {name:'视频',con:'【阿古朵】山林总动员',src:'./src/assets/images/update1.jpg'},
        {name:'故事',con:'山林之子=阿古朵',src:'./src/assets/images/update2.jpg'},
        {name:'视频',con:'【益城】桃枝誓义盟，任侠济山河',src:'./src/assets/images/update3.jpg'},
        {name:'视频',con:'【三分之战】版本登录动画',src:'./src/assets/images/update4.jpg'},
        {name:'漫画',con:'漫画-【镜】破镜之刃',src:'./src/assets/images/update5.jpg'},
        {name:'故事',con:'秩序统领-蒙恬',src:'./src/assets/images/update6.jpg'},
        {name:'皮肤',con:'皮肤-时之恋人',src:'./src/assets/images/update7.jpg'},
        {name:'活动',con:'白起的征兵试炼',src:'./src/assets/images/update8.jpg'},
        {name:'故事',con:'破镜之刃-镜',src:'./src/assets/images/update9.png'},
        {name:'故事',con:'最强兵器-白起',src:'./src/assets/images/update10.jpg'},

      ]
    }
  },
  methods:{
    left(){
      this.$refs.swipe.prev();
    },
    right(){
      this.$refs.swipe.next();
    }
  }
}
</script>

<style>

#lun .mint-swipe-items-wrap{
  padding-bottom: 61%;
}
#lun .mint-swipe-indicator{
  width: 12px;
  height: 12px;
  margin: 0 10px;
  opacity: 0.2;
  border: 1px solid white;
}
#lun .mint-swipe-indicator.is-active{
  background-color: white;
  opacity: 1;
}
</style>
<style scoped>
#lun {
  width: 95%;
  height: 230px;
  margin: 0px auto;
  position: relative;
}
#lun img{
  width: 100%;
}
#lun span{
  display: block;
  width: 40px;
  height: 40px;
  position: absolute;
  background: url("../assets/images/right.png") no-repeat;
  background-size: 50%;
  top: 45%;
  z-index: 9999;
}
#lun .left{
  left: 0;
  transform: rotate(180deg);
  background-position: 0px 12px;
}
#lun .right{
  right: 0;
}
#update{
  margin: 10px auto 0px;
  width: 93%;
  height: 350px;
  background: url("../assets/images/index14.jpg");
  color: white;
  padding-left: 2%;
}
#title{
  width: 100%;
  height: 40px;
  position: relative;
}
#title i{
  position: absolute;
  width: 24px;
  height: 24px;
  top: 8px;
  left: 10px;
  margin-right: 10px;
  background: url("../assets/images/updatelogo.png");
  background-size: 100%;
}
#title span{
  line-height: 40px;
  height: 40px;
  display: block;
  margin-left: 44px;
  font-size: 14px;
}
#srollbox{
  height: 310px;
  width: 100%;
  overflow: auto;
  font-size: 12px;
}
#srollbox ul{
  width: 100%;
  height: 200%;
}
#srollbox ul li{
  width: 90%;
  height: 10%;
  border-top: 1px solid gray;
}
#srollbox ul li i{
  display: block;
  float: left;
  height: 90%;
  margin: 2px 20px 0px 10px;
}
#srollbox ul li i img{
  height: 100%;
}
#srollbox ul li .video{
  border: 1px solid blue;
  color: blue;
  border-radius: 5px;
}
#con1 img{
  width: 100%;
}
#con2 img{
  width: 100%;
}
#con3 img{
  width: 100%;
}
#con1{
  float: left;
  width: 45%;
  margin: 10px 0px;
  margin-left: 3%;
}
#con2{
  float: left;
  width: 45%;
  margin: 10px 0px;
  margin-left: 3%;
}
#con3{
  width: 94%;
  margin: 0px auto;
}
#last{
  height: 300px;
  width: 100%;
}
</style>
