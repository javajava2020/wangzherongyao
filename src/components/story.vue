<template>
  <div id="nav">
    <transition name="fade" mode="in-out">
      <router-view></router-view>
    </transition>
    <ul @click="sound">
      <audio :src="src" id="music"></audio>
      <li v-for="(item,index) in list">
        <router-link :to="item.path">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[
        {name:'首页',path:"/storyindex"},
        {name:'大陆',path:"/world"},
        {name:'英雄',path: "/hero"},
        {name:'鉴赏',path: "/appreciate"}
      ],
      src:'./src/assets/music/sound.mp3',
    }
  },
  methods:{
    sound(){
      let audio = document.getElementById("music");
      audio.play();
    }
  }
}
</script>

<style scoped>
#nav{
  background: url("../assets/images/index-bg2.jpg") repeat;
}
ul{
  position: fixed;
  bottom: 0px;
  width: 102%;
  height: 60px;
  background: url("../assets/images/nav.jfif") repeat;
  background-size: auto 60px;
}
li{
  height: 60px;
  float: left;
  width: 25%;
  opacity: 0.8;
  line-height: 60px;
  text-align: center;
  color: white;
}
a{
  display: block;
  height: 60px;
  width: 100%;
  text-decoration: none;
  color: white;
  font-size: 14px;
}
.router-link-active{
  background: url("../assets/images/下载.jfif") no-repeat;
  background-size: 100% 100%;
}
.fade-enter{
  opacity: 0;
}
.fade-leave{
  opacity: 1;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
</style>
