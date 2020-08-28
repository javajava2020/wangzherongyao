<template>
  <div id="index">
    <download></download>
    <ul>
      <li v-for="item in nav">
        <router-link :to="item.router">{{item.con}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import download from './download';
export default {
  components:{
    'download':download,
  },
  data(){
    return{
      nav:[
        {
          con:'首页',
          router:'/home'
        },
        {
          con:'攻略中心',
          router:'/strategy'
        },
        {
          con:'赛事中心',
          router: '/game'
        }
      ]
    }
  }

}
</script>

<style scoped>
ul{
  width: 100%;
  height: 42px;
  padding-top: 48px;
  background-color: rgb(219,158,63);
}
li{
  width: 33.3%;
  height: 42px;
  float: left;
  color: white;
  line-height: 42px;
  text-align: center;
  background-color: rgb(219,158,63);
}
#index ul li a{
  height: 20px;
  text-decoration: none;
  color: white;
  font-size: 14px;
}
#index ul li .router-link-active{
  padding-bottom: 2px;
  border-bottom: 2px solid white;
}
</style>
