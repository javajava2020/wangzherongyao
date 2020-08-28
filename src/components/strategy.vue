<template>
    <main>
        <div class="pic">
            <mt-swipe :auto="4000">
                <mt-swipe-item>
                    <img src="../assets/images/l1.jpg" alt="" >
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../assets/images/l2.jpg" alt="" >
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../assets/images/l1.jpg" alt="" >
                </mt-swipe-item>
            </mt-swipe>

        </div>
        <div class="straone">
            <div class="one">
                <div class="sp"></div>
                <h3>热门视频</h3>
                <ul>
                    <li v-for="(item,index) in listone" >{{item}}</li>
                </ul>
            </div>


        </div>
        <div class="strathree">
            <div class="straa">
                <div class="gonglue"></div>
                <h3>英雄攻略</h3>
            </div>
            <ul class="yingxiong">
                <li>
                    <img src="../assets/images/lb.jpg">
                    <span>热门</span >
                </li>
                <li>
                    <img src="../assets/images/lb.jpg">
                    <span>热门</span >
                </li>
                <li>
                    <img src="../assets/images/lb.jpg">
                    <span>热门</span >
                </li>
                <li>
                    <img src="../assets/images/lb.jpg">
                    <span>热门</span >
                </li>
                <li>
                    <img src="../assets/images/lb.jpg">
                    <span>热门</span >
                </li>
                <li>
                    <img src="../assets/images/lb.jpg">
                    <span>热门</span >
                </li>
                <li class="zk">
                    <p>展开</p>
                </li>
            </ul>
            <div class="box1">
                <div class="one">
                    <p>
                        <span class="a">鲁班七号</span>
                        <span class="b">射手</span>
                        <span class="c">登场排名 1</span>
                        <span class="d">胜率 35</span>
                    </p>
                    <span class="e">查看英雄详细介绍 ></span>
                </div>
                <ul class="two">
                    <li>
                        <div>
                            <img src="../assets/images/l1.png">
                            <span class="bofang"></span>
                            <span class="t">22秒</span>
                        </div>

                        <p>鲁班绝招神操作，强势卡位霸气五杀，吸血的重要性不言而喻</p>
                        <i></i>
                        <span class="s">920</span>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/images/l1.png">
                            <span class="bofang"></span>
                            <span class="t">22秒</span>
                        </div>


                        <p>鲁班绝招神操作，强势卡位霸气五杀，吸血的重要性不言而喻</p>
                        <i></i>
                        <span class="s">920</span>
                    </li>
                </ul>
                <ul class="three">
                    <li>
                        <img src="../assets/images/l3.jpg">
                        <p class="t1">S20峡谷中最'欠揍'的几位英雄！小短腿鲁班竟登榜一！</p>
                        <p class="t2">S20峡谷中最'欠揍'的几位英雄！小短腿鲁班竟登榜一！</p>
                        <p class="t3">2020-08-24 12:01:45</p>
                    </li>
                    <li>
                        <img src="../assets/images/l3.jpg">
                        <p class="t1">S20峡谷中最'欠揍'的几位英雄！小短腿鲁班竟登榜一！</p>
                        <p class="t2">S20峡谷中最'欠揍'的几位英雄！小短腿鲁班竟登榜一！</p>
                        <p class="t3">2020-08-24 12:01:45</p>
                    </li>

                </ul>
                <p class="jiazai">加载更多关于鲁班七号的内容</p>
            </div>
        </div>
        <div id="video">
          <div class="newsnav">
            <div class="newslogo"></div>
            <div class="news2">精彩视频</div>
            <div class="newslast">...</div>
          </div>
          <div id="videolist">
            <ul class="first">
              <li v-for="(item,index) in videolist"><a @click="flagvideo=index" :class="{back:flagvideo==index}">{{item.name}}</a></li>
            </ul>
            <div class="left">
              <ul v-for="(item,index) in videolist" v-show="flagvideo==index">
                <li v-for="i in item.list"><img :src="i.src" alt="">{{i.con}}</li>
              </ul>
            </div>
          </div>
        </div>
        <router-view></router-view>
    </main>
</template>

<script>
    // export default导出数据
    export default{
         data(){
           return{
             flagvideo:0,
             flaghero:0,
             flagnews:0,
             listone:['日','周','月'],
             videolist:[
               {name:'精彩栏目',list:[
                   {
                     src: './src/assets/images/狄仁杰1.png',
                     con: '《狄仁杰封神榜》第十三期：嚣张多日 恭送国服大'
                   },
                   {
                     src:'./src/assets/images/狄仁杰2.png',
                     con:'《狄仁杰封神榜》13：又有演员出没？国服大老板小黑'
                   },
                   {
                     src:'./src/assets/images/狄仁杰3.jfif',
                     con:'《峡谷460》13：Fly闪耀峡谷秀，大仙吃果反掉血？'
                   },
                   {
                     src:'./src/assets/images/狄仁杰4.jfif',
                     con:'《狄仁杰封神榜》12：打假专题！您举报的老板已被'
                   }
                 ]},
               {name:'英雄攻略',list:[
                   {
                     src: './src/assets/images/大仙1.png',
                     con: '特大逆风的情况下，孙尚香的打法思路！'
                   },
                   {
                     src:'./src/assets/images/大仙2.png',
                     con:'韩信：全局意识一丝丝操作就能克制老虎'
                   },
                   {
                     src:'./src/assets/images/大仙3.jpg',
                     con:'大仙神操作：被抓了也无所谓，伤害这一块大仙从来'
                   },
                   {
                     src:'./src/assets/images/大仙3.jpg',
                     con:'大仙神操作：玄策清兵时候顺便带走一个敌人，大'
                   }
                 ]},
               {name:'赛事精品',list:[
                   {
                     src: './src/assets/images/ts.jfif',
                     con: '《王者炸麦了》TS不知奇迹（上）'
                   },
                   {
                     src:'./src/assets/images/ts.jfif',
                     con:'荣耀大话王 世冠特别篇：暖阳回应夺冠“不止奇迹'
                   },
                   {
                     src:'./src/assets/images/ts.jfif',
                     con:'《王者炸麦了》MTG赢得成名之战 成都AG有惊无险晋级'
                   },
                   {
                     src:'./src/assets/images/ts.jfif',
                     con:'《王者炸麦了》DYG玩脑子打破僵局 成都AG&TS BP'
                   }
                 ]}
             ]
           }
         }
    }
</script>

<style>
.pic .mint-swipe-items-wrap {

  padding-bottom:45.06%
}
.pic .mint-swipe-indicators{

  opacity:0.9;
}
</style>
<style scoped>
    body{
        background-color:#ededed;

    }

    .pic img{
        width:100%;

    }

    .straone{
        width:100%;
        height:264px;
        background-color:white;
        margin-left:auto;
        margin-right:auto;
    }
    .straone .one{
        width:100%;
        height:50px;
        border-bottom:1px solid black;


    }
    .straone .one h3{
        display:inline;
        text-height:bold;
         position:relative;
        top:15px

    }
    .straone .one .sp{
        width:21.33px;
        height:21.33px;
        background-image:url("../assets/images/jlt1.png");
        background-position:-172px 470px;
        float: left;
        background-size:87px;
        margin-left:10px;
        position:relative;
        top:13px
    }
    .straone .one ul{
        float:right;
        margin-right:10px;
         position:relative;
        top:15px
    }
    .straone .one li{
        float:left;
        margin-left:10px;
    }
    .strathree{
        width:100%;
        height:603.08px;
        margin-top:5px;
        background-color:white;
    }
    .straa{
        width:100%;
        height:50px;
    }
    .straa .gonglue{
        width:21.33px;
        height:21.33px;
        background-image:url("../assets/images/jlt1.png");
        background-position:-20px 3px;
        background-size:87px;
        float:left;
        margin-left:10px;
        position:relative;
        top:15px

    }
    .straa h3{

        text-height:bold;
        position:relative;
        top:15px
    }
    .yingxiong{
        width:100%;
        height:64.5px;
        margin:0px 2%;
    }
    .yingxiong li{
        width:12%;
        height:43.9px;
        position:relative;
        float:left;
        margin-right:2%;
        margin-top:10px

    }
    .yingxiong li img{
        width:100%;
        height:43.9px;
    }
    .yingxiong li span{
        position:absolute;
        font-size:10px;
        color:white;
        text-align:center;
        bottom:0px;
        width:95%;
        background-color:rgba(0,0,0,.5);
    }
    .yingxiong .zk{
        border:1px solid #ddd;
    }
    .yingxiong .zk p{
        font-size:10px;
        text-align:center;
        line-height:43.9px
    }
    .box1{
        width:100%;
        height:485.78px;
    }
    .box1 .one{
        width:100%;
        height:24px;
        margin-left:10px;
        margin-right:10px
    }
    .box1 .one p{
        font-size:10px;
        color:#3a3939;
        float:left;
        line-height:24px
    }
    .box1 .one .e{
        font-size:10px;
        color:#3a3939;
        float:right;
        margin-right:10px;
        line-height:24px
    }
    .box1 .one .b{
        padding-left:5px;
        padding-right:5px;
        border-left:1px solid #3a3939;
        border-right:1px solid #3a3939;
    }
    .box1 .one .c{
        padding-right:5px;
        border-right:1px solid #3a3939;
    }
    .box1 .two{
        width:100%;
        height:181.31px;

    }
    .box1 .two li{
        float:left;
        width:47%;
        height:198.78px;
        margin-left:2%;


    }
    .box1 .two div{
        position: relative;
    }
    .box1 .two img{
        display:block;
        width:100%;
        height:109.22px;

    }
    .box1 .two .bofang{
        width:42.66px;
        height:42.66px;
        background-image:url("../assets/images/jlt1.png");
        background-position:71px 954px;
        background-size: 200%;
        position:absolute;
        top:35%;

        left:40%;
    }
    .two li .t{
        width:36.66px;
        height:19.19px;
        background-color:black;
        color:white;
        position:absolute;
        right:0;
        bottom:0
    }
    .box1 .two p{
        font-size:14px;
        margin-top:10px;
        color:#343440;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;

    }
    .box1 .two .s{
        margin-left:17px;
        margin-top:10px;
        float:left;
        font-size:15px;
    }
    .box1 .two i{
        margin-top:10px;
        float:left;
        width:21.33px;
        height:21.33px;
        position:absolute;
        background-image:url("../assets/images/jlt1.png");
        background-position:0px 0px;
        background-size:90px;
    }
    .box1 .three li{
        width:100%;
        height:101.84px;
        margin:20px 10px;
        border-top:1px solid #d4d9de;
    }
    .box1 .three img{
        margin-top:15px;
        margin-right:10px;
        width:123.72px;
        height:75.19px;
        float:left;
    }
    .box1 .three .t1{
        font-size:16px;
        margin-top:15px;
        overflow: hidden;
        color:#343440;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .box1 .three .t2{
        font-size:13px;
        margin-top:13px;
        overflow: hidden;
        color:#7a7a80;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .box1 .three .t3{
        font-size:13px;
        color:#7a7a80;
        margin-top:15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .box1 .jiazai{
        width:100%;
        height:25px;
        font-size:13px;
        text-align:center;
        line-height:25px;
        color:#7a7a80;
    }
    .newsnav{
      height: 50px;
      margin: 10px;
      border-bottom: 1px solid gray;
    }
    .newsnav div{
      display: inline-block;
      margin-left: 10px;
    }
    .newslogo{
      width: 15px;
      height: 15px;
      background-color: black;
      margin-right: 10px;
      margin-top: 18px;
    }
    .newslast{
      display: block;
      font-size: 30px;
      line-height: 30px;
      float: right;
      margin-right: 10px;
    }
    .first{
      width: 100%;
      font-size: 80%;
      height: 22px;
      line-height: 22px;
      margin-bottom: 10px;
    }

    .first li{
      float: left;
      width: 20%;
      text-align: center;
      vertical-align: middle;
    }

    .first .back{
      color: orange;
      border-bottom: 2px solid orange;
    }
    #video{
      width: 100%;
      height: 480px;
      margin-top: 20px;
    }
    #video .left ul{
      width: 90%;
      margin: 0px auto;
    }
    #video .left ul li{
      float: left;
      width: 45%;
      font-size: 12px;
      margin-right: 5%;
    }
    #video .left ul li img{
      width: 100%;
    }
</style>
