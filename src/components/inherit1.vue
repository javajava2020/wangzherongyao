<template>
  <main>
    <img src="../assets/images/kv.jpg" alt="" width="100%">
    <img src="../assets/images/tit1.png" alt="" width="100%">
    <div id="swipe">
      <mt-swipe :auto="2000">
        <mt-swipe-item><img src="../assets/images/love1.jpeg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/love2.jpeg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/love3.jpeg" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <div id="login"></div>
    <div id="month"></div>
    <div id="news">
      <h1>最新快讯</h1>
      <ul>
        <li v-for="item in newslist">{{item}}</li>
      </ul>
    </div>
    <img src="../assets/images/tit2.png" alt="" width="100%">
    <div id="swipe1">

    </div>
  </main>
</template>
<script>
export default {
  data(){
    return{
      newslist:[
        '08/23 狗粮满满|最动人的情书读给你听',
        '08/21 乞巧牵缘-携手中国美术学院创作过程大揭秘',
        '08/14 “缘起峡谷,情定七夕” —— 《王者荣耀》 七夕告白季',
        '06/30 王者峡谷云赛舟，今年端午特别“浪”'
      ],
  }
  }
}
</script>
<style>
 #swipe .mint-swipe-items-wrap{
   padding-bottom: 43%;
 }
 #swipe .mint-swipe-indicators{
   width: 100%;
   bottom: 0;
 }
 #swipe .mint-swipe-indicator {
   opacity: 0.5;
   width: 33.3%;
   height: 30px;
   border-radius: 0px;
   margin: 0px;
   background-color: black;
 }
 #swipe .mint-swipe-indicator.is-active{
   background-color: #c39b5e;
   opacity: 0.8;
 }
 #swipe .mint-swipe-indicator::after{
   content: '';
   color: white;
   font-size: 10px;
   line-height: 30px;
 }
 #swipe .mint-swipe-indicator:nth-child(1)::after{
   content: '七夕峡谷告白季';
   padding-left: 20px;
 }
 #swipe .mint-swipe-indicator:nth-child(2)::after{
   content: '最动人的情书';
   padding-left: 30px;
 }
 #swipe .mint-swipe-indicator:nth-child(3)::after{
   content: '峡谷七夕直播';
   padding-left: 30px;
 }
</style>
<style scoped>
  #swipe{
    width: 90%;
    margin: 0 auto;
    position: relative;
    margin-bottom: 15px;
  }
  #swipe img{
    width: 100%;
  }
  #login{
    width: 55%;
    margin-left: 5%;
    margin-right: 1%;
    height: 200px;
    display: inline-block;
    background: url("../assets/images/bg-login2.jpg");
    background-size: 100% 100%;
  }
  #month{
    display: inline-block;
    width: 34%;
    height: 200px;
    background: url("../assets/images/下载1.jfif") no-repeat;
    background-size: 100% 100%;
  }
  #news{
    width: 85%;
    margin: 15px auto;
    margin-bottom: 30px;
    height: 155px;
    padding-left: 5%;
    background: url("../assets/images/bg-news.jpg") no-repeat;
    background-size: 100% 100%;
  }
  #news h1{
    color: white;
    font-size: 14px;
    height: 35px;
    line-height: 35px;
  }
  #news li{
    width: 95%;
    color: gray;
    font-size: 10px;
    height: 30px;
    border-bottom: 1px solid black;
    line-height: 30px;
  }
  #news li::before{
    content: '‧';
    padding-right: 5px;
  }
  #news li:nth-child(4){
    border-bottom: 0px;
  }
</style>
