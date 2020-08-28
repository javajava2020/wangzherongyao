<template>
    <main>
        <div>
            <ul class="gameone">
                <li v-for="(item,index) in listgame">
                    <router-link :to="item.path">{{item.con}}</router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </main>
</template>

<script>
    export default{
        data(){
            return{
                listgame:[
                    {
                        con:'世界冠军杯',
                        path:'/gamea'
                    },
                    {
                        con:'KPL',
                        path:'/gameb'
                    },
                    {
                        con:'KPLGT',
                        path:'/gamec'
                    },
                    {
                        con:'城市赛',
                        path:'/gamed'
                    },
                    {
                        con:'高校联赛',
                        path:'/gamee'
                    },
                    {
                        con:'TGA',
                        path:'/gamef'
                    },
                    {
                        con:'WGI',
                        path:'/gameg'
                    },
                    {
                        con:'模拟战大师赛',
                        path:'/gameh'
                    },
                ]
            }
        }
    }
</script>
<style scoped>
    main>div{
      overflow: auto;
    }
    .gameone li .router-link-active{
      color: orange;
      padding-bottom: 8px;
      border-bottom: 2px solid orange;
    }
    .gameone{
        width:200%;
        height:47.78px;
        margin-left:10px;
        margin-right:10px;

    }
    .gameone li{
        float:left;
        width:83.17px;
        height:44px;
        text-align:center;
        line-height:44px;

    }
    .gameone li a{
      text-decoration: none;
      color: black;
      font-size: 14px;
    }
</style>
