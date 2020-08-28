<template>
  <main>
    <div id="download">
      <a href="https://pvp.qq.com/m/index.shtml" id="logo"></a>
      <div id="nav">
        <h1>王者荣耀</h1>
        <p>团队成就更多</p>
      </div>
      <a href="https://pvp.qq.com/zlkdatasys/mct/d/play.shtml" id="load"></a>
    </div>
    <div class="pic11">
      <p>
        <img src="../assets/images/QQ.jpg" alt="">
      </p>

    </div>
    <div class="denglu">
      <ul>
        <li>
          <span></span>
          <input type="text" placeholder="请输入QQ账号" class="one">
        </li>
        <li>
          <i></i>
          <input type="text" placeholder="请输入密码" class="two">
        </li>
      </ul>
    </div>
    <div class="lost">
      <ul>
        <li class="p1">
          <p >忘记密码</p>
        </li>
        <li class="p2">
          <p >用户注册</p>
        </li>
      </ul>
    </div>
    <div class="DL">
      <p>登陆</p>
    </div>
    <div class="vx">
      <p>
        <span></span>
      </p>
      <p>
        微信登陆
      </p>
    </div>
  </main>
</template>

<script>
export  default {

}
</script>


<style scoped>
body{
  background-color: cadetblue;
}
  #download{
    width: 100%;
    height: 48px;
    position: relative;
    background-image: url("../assets/images/index.png");
    background-size: 500px;
    background-position: 0px 130px;
    
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
  .pic11{
    width: 100%;
    height: 200px;
    text-align: center;
  }
  .pic11 img{
    margin-top: 15%;
    width: 70px;
    border-radius: 50%;
  }
  .denglu{
    width: 100%;
    height: 137.19px;
    margin: 10px 2%;
  
  }
  .denglu ul li{
    width: 100%;
    height: 66px;
    
    margin-left: 10%;
  }
  .denglu li input{
    border-radius: 10px;
    background-color:white;
    border:1px solid black;
    width: 60%;
    height: 60%;
  }
  .denglu li span{
    display: inline-block;
    width: 30px;
    height:30px;
    /* background-color: black; */
    background-image: url("../assets/images/user.svg");
    background-size: 100%;
  }
  .denglu li i{
    display: inline-block;
    width: 30px;
    height:30px;
    background-image: url("../assets/images/lock.svg");
    background-size: 100%;
  }
  .lost{
    width: 100%;
    height: 40px;
  }
  .lost ul{
    overflow: hidden;
  }
  .lost .p1{
    width:40%;
    float: left;
    margin-left: 10%;
  }
  .lost .p2{
    text-align: right;
    width:40%;
    float: right;
    margin-right: 10%;
  }
  .DL{
    width: 60%;
    height: 50px;
    margin: 0px 20%;
    
  }
  .DL p{
    color:white;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 10px 5px;
    border: 1px solid red;
    border-radius: 50px;
    background-color: rgb(233, 162, 176);
  }
  .vx{
    width: 100%;
    height: 150px;
  }
  .vx p{
    text-align: center;
  }
  .vx span{
    margin-top: 10px;
    display: inline-block;
    width: 60px;
    height: 60px;
    background-image: url("../assets/images/vx.jpg");
    background-size: 150%;
    background-position: -13px -14px;
    border-radius: 50%;
    border: 1px solid rgb(112, 107, 107);
  }
</style>
