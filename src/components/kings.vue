<template>
  <main>
    <div id="nav">
      <ul>
        <li v-for="(item,index) in navlist" @click="navflag=index" :class="{navimg:navflag==index}">
          <router-link :to="item.path">&nbsp;</router-link>
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
        {name:'专题首页',path:'/kings1'},
        {name:'国民记忆系列皮肤',path:'/kings2'},
        {name:'荣耀中国节系列活动',path:'/kings3'},
        {name:'航天记忆系列联动',path:'/kings4'}
      ],
      navflag:0
    }
  }
}
</script>

<style scoped>
#nav{
  width: 101%;
  height: 65px;
  position: fixed;
  top: 0px;
  left: 0px;
  background: url("../assets/images/topnav_font.png") no-repeat;
  background-size: 100%;
  opacity: 0.8;
}
#nav ul {
  width: 100%;
  height: 65px;
}
#nav ul li{
  width: 25%;
  text-align: center;
  line-height: 65px;
  float: left;
  color: gray;
  font-size: 10px;
}
.navimg{
  background-color: rgba(142, 113, 68, 0.9);
}
#nav ul li a{
  width: 100%;
  height: 65px;
  display: block;
  opacity: 0;
}
#pad{
  width: 100%;
  height: 65px;
}
</style>
