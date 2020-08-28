<template>
  <main>
    <div id="top" :style="{left:len}">
      <ul id="hide">
        <li><img src="../assets/images/icon2.png" alt="" height="70%"></li>
        <li><img src="../assets/images/icon1.png" alt="" height="70%"></li>
      </ul>
      <div id="show" @click="change" :style="{backgroundImage:`url(${src})`}"></div>
    </div>
    <div id="bg"></div>
    <div id="conten">
        <div id="btnvideo" @click="play"></div>
    </div>
    <div id="over" v-show="flagplay"></div>
    <div id="videoplay" v-show="flagplay" @click="pause">
      <video :src="video" width="100%" height="100%" controls ref="video"></video>
      <div id="videoclose" @click="close">x</div>
    </div>
    <div id="con">

    </div>
  </main>
</template>

<script>
export  default {
  data(){
    return{
      //true表示正在隐藏
      flag:true,
      flagplay:false,
      len:'-190px',
      src:'./src/assets/images/btn-show.png',
      video:'./src/assets/video/video.mp4'
    }
  },
  methods:{
    change(){
      if(this.flag==false){
        this.flag = true;
        this.len = '-190px';
        this.src = './src/assets/images/btn-show.png';
      }else{
        this.flag = false;
        this.len = '0px';
        this.src = './src/assets/images/btn-hide.png';
      }
    },
    play(){
      this.flagplay = true;
    },
    pause(){
      this.$refs.video.pause();
    },
    close(){
      this.flagplay = false;
    }
  }
}
</script>

<style scoped>

#bg{
  width: 100%;
  padding-bottom: 180%;
  background: url("../assets/images/bg0.jpg") no-repeat;
  background-size: 100%;
  margin-top: -55px;
  z-index: -1;
}
#top{
  height: 120px;
  width: 240px;
  position: fixed;
  left: -190px;
  bottom: 30px;
  z-index: 999;
  transition: all .5s linear;
}
#hide{
  float: left;
  width: 200px;
  height: 120px;
  background: url("../assets/images/icon-repeat.jpg") repeat-x;
}
#hide li{
  width: 100px;
  height: 120px;
  float: left;
}
#hide li img{
  margin-left: 20px;
  margin-top: 23px;
}
#show{
  float: left;
  width: 40px;
  height: 120px;
  background: url("../assets/images/btn-hide.png") no-repeat;
  background-size: 100% 100%;
}
#conten{
  width: 100%;
  padding-bottom: 221%;
  background: url("../assets/images/bg1.jpg") no-repeat;
  background-size: 100% 100%;
  position: relative;
}
#btnvideo{
  width: 75px;
  height: 75px;
  border-radius: 50%;
  position: absolute;
  left: 41%;
  top: 38%;
  background: url("../assets/images/btn-video.png") no-repeat;
  background-size: 100% 100%;
  animation: mybig 2s infinite linear;
  -webkit-animation: mybig 2s infinite linear;
}
@keyframes mybig {
  0%{transform: scale(1)}
  50%{transform: scale(1.1)}
  100%{transform: scale(1)}
}
@-webkit-keyframes mybig {
  0%{transform: scale(1)}
  50%{transform: scale(1.1)}
  100%{transform: scale(1)}
}
#videoplay{
  width: 90%;
  height: 210px;
  position: fixed;
  left: 4%;
  top: 40%;
  border: 5px solid black;
}
#videoclose{
  width: 30px;
  height: 30px;
  position: absolute;
  background-color: black;
  top: -30px;
  right: 0px;
  color: white;
  text-align: center;
}
#over{
  position: absolute;
  background-color: black;
  opacity: 0.7;
  width: 100%;
  height:2000px;
  left: 0px;
  top: 0px
}
#con{
  width: 100%;
  padding-bottom: 1144%;
  background: url("../assets/images/bg2.jpg") no-repeat;
  background-size: 100%;
}
</style>
