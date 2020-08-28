<template>
  <main>
    <download></download>
    <ul id="innav">
      <li v-for="(v,i) in nav">
        <router-link :to="v.router">{{v.con}}</router-link>
      </li>
    </ul>
    <div id="nav">
      <router-link id="arrow" to="/home"><</router-link>
      <div id="roun">
        <ul>
          <li v-for="(i,index) in navlist" @click="flagnav=index" :class="{navli:flagnav==index}">{{i}}</li>
        </ul>
      </div>
    </div>
    <div class="pad"></div>
    <div id="intro">
      <h2>游戏介绍</h2>
      <div>
        <img src="../assets/images/ec_icon_03.png" alt="">
        <h1>什么是王者荣耀？</h1>
        <p>

          《王者荣耀》是腾讯第一5V5团队公平竞技手游，国民MOBA手游大作！5V5王者峡谷、公平对战、还原MOBA经典体验；契约之战、五军对决、边境突围等，带来花式作战乐趣！10秒实时跨区匹配，与好友开黑上分，向最强王者进击！多款英雄任凭选择，一血、五杀、超神，实力碾压，收割全场！敌军即将到达战场，王者召唤师快来集结好友，准备团战，就在《王者荣耀》！
        </p>
      </div>
    </div>
    <div class="pad"></div>
    <div id="fea">
      <h2>游戏特色</h2>
      <div>
        <ul></ul>
        <h1>视觉全面升级! 王者2.0时代来临</h1>
        <p>
        全景沉浸式大厅，国风配色、传统饰形、山水云纹，更加具有东方神韵；次世代技术，全面提升画质，呈现超高清峡谷地图。
        </p>
        <img src="../assets/images/tese.png" alt="">
      </div>
    </div>
  </main>

</template>

<script>
import download from './download';
export default {
  components:{
    'download':download,
  },
  data(){
    return{
      flagnav:0,
      nav:[
        {
          con:'首页',
          router:'/home'
        },
        {
          con:'攻略中心',
          router:'/game'
        },
        {
          con:'赛事中心',
          router: '/strategy'
        }
      ],
      navlist:['走进王者荣耀','新手指南','新手推荐'],
    }
  }

}
</script>

<style scoped>
main{
  background-color: gainsboro;
}
#innav{
  width: 100%;
  height: 42px;
  padding-top: 48px;
  background-color: rgb(219,158,63);
}
#innav li{
  width: 33.3%;
  height: 42px;
  float: left;
  color: white;
  line-height: 42px;
  text-align: center;
  background-color: rgb(219,158,63);
}
#innav a{
  text-decoration: none;
  color: white;
}
.router-link-active{
  text-decoration: underline;
  text-decoration-color: white;
  text-decoration-width: 3px;
}
#nav{
  width: 100%;
  height: 40px;
}
#arrow{
  width: 10%;
  height: 40px;
  float: left;
  color: blue;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  background-color: white;
}
#roun{
  height: 40px;
  float: left;
  width: 90%;
  background-color: white;
}
#roun ul{
  width: 100%;
  height: 40px;
}
#roun li{
  float: left;
  height: 40px;
  width: 33.3%;
  text-align: center;
  line-height: 40px;
  font-size: 12px;
}
.navli{
  background: url("../assets/images/go_icon_02.png") no-repeat;
  background-size: 100%;
}
.pad{
  width: 100%;
  height: 40px;
}
#intro{
  width: 94%;
  margin: 0px auto;
}
#intro h2{
  padding-left: 30px;
  background: url("../assets/images/go_icon_01.png") no-repeat;
  background-size: auto 100%;
}
#intro div{
  width: 100%;
  margin-top: 20px;
  border-radius: 5px;
  background-color: white;
  color: gray;
}
#intro img{
  width: 94%;
  margin: 3%;
}
#intro h1{
  font-size: 18px;
  padding-left: 3%;
  padding-bottom: 20px;
}
#intro p{
  padding-left: 3%;
  padding-bottom: 10px;
  text-indent: 2em;
  font-size: 14px;
}
#fea{
  width: 94%;
  margin: 0px auto;
}
#fea h2{
  padding-left: 30px;
  background: url("../assets/images/go_icon_04.png") no-repeat;
  background-size: auto 100%;
}
#fea div{
  width: 100%;
  margin-top: 20px;
  border-radius: 5px;
  background-color: white;
  color: gray;
}
#fea img{
  width: 94%;
  margin: 3%;
}
#fea h1{
  color: black;
  font-weight: bold;
  font-size: 18px;
  padding-left: 3%;
  padding-bottom: 20px;
}
#fea p{
  padding-left: 3%;
  padding-bottom: 10px;
  text-indent: 2em;
  font-size: 14px;
}
</style>
