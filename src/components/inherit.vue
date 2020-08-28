<template>
  <main>
    <div id="nav">
      <ul>
        <li v-for="(item,index) in navlist">
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <div id="pad"></div>
    <router-view></router-view>
  </main>
</template>

<script>
export  default {
  data(){
    return {
      navlist:[
        {name:'专题首页',path:'/inherit1'},
        {name:'国民记忆系列皮肤',path:'/inherit2'},
        {name:'荣耀中国节系列活动',path:'/inherit3'},
        {name:'航天记忆系列联动',path:'/inherit4'}
        ],
    }
  }
}
</script>

<style scoped>
  main{
    background-color: #1a1a1a;
  }
  #nav{
    width: 100%;
    height: 55px;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: #1a1a1a;
  }
  #nav ul {
    width: 100%;
    height: 55px;
  }
   #nav ul li{
     width: 25%;
     text-align: center;
     line-height: 55px;
     float: left;
     color: gray;
     font-size: 10px;
   }
   .router-link-active{
     background: url("../assets/images/bg-nav.jpg") no-repeat;
     background-size: 100% 100%;
     color: #c39b5e;
   }
   #pad{
     width: 100%;
     height: 55px;
   }
   a{
     display: block;
     width: 100%;
     height: 55px;
     color: gray;
     text-decoration: none;
   }
</style>
