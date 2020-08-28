<template>
  <div id="download">
    <a href="https://pvp.qq.com/m/index.shtml" id="logo"></a>
    <div id="nav">
      <h1>王者荣耀</h1>
      <p>团队成就更多</p>
    </div>
    <a href="https://pvp.qq.com/zlkdatasys/mct/d/play.shtml" id="load"></a>
  </div>
</template>

<script>
export default{

}
</script>

<style scoped>
  #download{
    width: 100%;
    height: 48px;
    position: fixed;
    background-image: url("../assets/images/index.png");
    background-size: 500px;
    background-position: 0px 130px;
    overflow: hidden;
    z-index: 9999;
  }
  #nav{
    float: left;
    height: 48px;
  }
  #nav h1 {
    margin-top: 8px;
    font-size: 80%;
    color:white
  }
  #nav p{
    font-size: 5px;
    color: gray;
  }
  #logo{
    diplay: block;
    margin-top: 8px;
    width: 32px;
    height: 32px;
    float: left;
    margin: 8px 10px 0px 20px;
    background-image: url("../assets/images/index.png");
    background-size: 400px;
    background-position: 0px 156px;
  }
  #load{
    display: block;
    width: 64px;
    height: 26px;
    float: right;
    margin-right: 15px;
    margin-top: 11px;
    background-image: url("../assets/images/index.png");
    background-size: 390px;
    background-position: -60px 152px;
  }
</style>
