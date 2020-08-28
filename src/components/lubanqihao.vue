<template>
    <main>
         <div id="download">
            <a href="https://pvp.qq.com/m/index.shtml" id="logo"></a>
            <div id="nav">
            <h1>王者荣耀 攻略站</h1>

            </div>
            <a href="#" id="load">更多英雄 》</a>
        </div>
        <div id="pad"></div>
        <div class="tu">
            <div>
                <p >机关造物</p>
                <p class="p1">鲁班七号</p>
                <p>射手</p>
                <div class="dibu">
                    <ul>
                        <li>难度<span>4</span></li>
                        <li>难度<span>4</span></li>
                        <li>难度<span>4</span></li>
                        <li>难度<span>4</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="yx">
            <ul class="a">
                <li v-for="(item,index) in listll" @click="change(index)">
                    <p :class="{c:index==num}">{{item.con}}</p>
                </li>
            </ul>
           <section>
                <div v-show="num==0" >
                    <div class="one">
                        <ul>
                            <li>

                                <p><span></span>英雄介绍视频</p>
                            </li>
                            <li>

                                <p><span></span>一图识英雄</p>
                            </li>
                        </ul>
                    </div>
                    <div class="jineng">
                        <ul class="jn">
                            <li v-for="(item,index) in listpc"  @click="add(index)">
                                <img :src="item.src" alt="">
                            </li>
                        </ul>
                        <section>
                            <div>
                                <span>活力压制</span>
                                <span>(冷却值：0 消耗：0)</span>
                                <p>
                                    被动：鲁班七号连续使用普通攻击时，第五次普通攻击会掏出机关枪进行扫射，扫射会造成3次伤害，对敌人英雄每次造成其最大生命6%物理伤害（每100点额外物理攻击提升1%），对小兵野怪防御塔造成120（+50%物理加成）点物理伤害；使用技能后鲁班七号下一次普通攻击变更为扫射
                                </p>

                            </div>
                        </section>

                        <div class="jn2">

                            <div>
                                <h3><span></span>加点建议</h3>
                                <ul>
                                    <li>
                                        <span>主升</span>
                                        <img src="../assets/images/jn1.png" alt="">
                                        <span>河豚手臂</span>
                                    </li>
                                    <li>
                                        <span>主升</span>
                                        <img src="../assets/images/jn1.png" alt="">
                                        <span>河豚手臂</span>
                                    </li>
                                    <li class="zhs">
                                        <p>召唤师技能</p>
                                        <img src="../assets/images/jn1.png" alt="">

                                        <img src="../assets/images/jn1.png" alt="">
                                        <span>疾跑</span>
                                        <span>狂暴</span>
                                    </li>
                                </ul>
                            </div>


                        </div>
                        <div class="zb">
                            <h3><span></span>出装推荐</h3>
                            <p>顺风出装</p>
                            <ul>
                                <li>
                                    <img src="../assets/images/300.jpg" alt="">
                                    <span>急速战靴</span>
                                </li>
                                 <li>
                                    <img src="../assets/images/300.jpg" alt="">
                                    <span>急速战靴</span>
                                </li>
                                 <li>
                                    <img src="../assets/images/300.jpg" alt="">
                                    <span>急速战靴</span>
                                </li>
                                 <li>
                                    <img src="../assets/images/300.jpg" alt="">
                                    <span>急速战靴</span>
                                </li>
                                 <li>
                                    <img src="../assets/images/300.jpg" alt="">
                                    <span>急速战靴</span>
                                </li>
                                 <li>
                                    <img src="../assets/images/300.jpg" alt="">
                                    <span>急速战靴</span>
                                </li>
                            </ul>
                            <h3><span></span>出装推荐</h3>
                            <p>顺风出装</p>
                            <ul>
                                <li>
                                    <img src="../assets/images/300.jpg" alt="">
                                    <span>急速战靴</span>
                                </li>
                                 <li>
                                    <img src="../assets/images/300.jpg" alt="">
                                    <span>急速战靴</span>
                                </li>
                                 <li>
                                    <img src="../assets/images/300.jpg" alt="">
                                    <span>急速战靴</span>
                                </li>
                                 <li>
                                    <img src="../assets/images/300.jpg" alt="">
                                    <span>急速战靴</span>
                                </li>
                                 <li>
                                    <img src="../assets/images/300.jpg" alt="">
                                    <span>急速战靴</span>
                                </li>
                                 <li>
                                    <img src="../assets/images/300.jpg" alt="">
                                    <span>急速战靴</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mw">
                            <h3><span></span>铭文推荐</h3>
                            <ul>
                                <li>
                                    <img src="../assets/images/mw.png" alt="">
                                    <p>异变</p>
                                    <p>物理攻击力+2</p>
                                    <p>物理攻击力+2</p>
                                </li>
                                <li>
                                    <img src="../assets/images/mw.png" alt="">
                                    <p>异变</p>
                                    <p>物理攻击力+2</p>
                                    <p>物理攻击力+2</p>
                                </li>
                                <li>
                                    <img src="../assets/images/mw.png" alt="">
                                    <p>异变</p>
                                    <p>物理攻击力+2</p>
                                    <p>物理攻击力+2</p>
                                </li>
                            </ul>
                        </div>
                        <div class="jiqiao">
                          <h3><span></span>使用技巧</h3>
                          <p>使用时需要普攻持续配合1技能进行更好的输出，无敌鲨嘴炮可进行一个较好的消耗或是收割.由于没有位移，在没有扫射被动的时候射程一般，所以是一个非常需要队友保护的输出点，不然很容易被对方刺客切死</p>
                        </div>
                        <div class="jiqiao">
                          <h3><span></span>使用技巧</h3>
                          <p>使用时需要普攻持续配合1技能进行更好的输出，无敌鲨嘴炮可进行一个较好的消耗或是收割.由于没有位移，在没有扫射被动的时候射程一般，所以是一个非常需要队友保护的输出点，不然很容易被对方刺客切死</p>
                        </div>
                        <div class="jiqiao">
                          <h3><span></span>使用技巧</h3>
                          <p>使用时需要普攻持续配合1技能进行更好的输出，无敌鲨嘴炮可进行一个较好的消耗或是收割.由于没有位移，在没有扫射被动的时候射程一般，所以是一个非常需要队友保护的输出点，不然很容易被对方刺客切死</p>
                        </div>
                        <div class="guanxi">
                          <h3><span></span>英雄关系</h3>

                          <h3>最佳搭档</h3>
                          <ul class="better">
                            <li>
                              <img src="../assets/images/186.jpg" alt="">
                              <p><p class="rela-text">太乙真人：鲁班七号本身没有位移，是敌方英雄主要针对目标，太乙真人的双控制技能与大招可以保障鲁班的输出环境，在追击时群眩晕稳定控制伤害也能配合鲁班轻松完成击杀。</p></p>
                            </li>
                            <li>
                              <img src="../assets/images/168.jpg" alt="">
                              <p>牛魔：牛魔的被动效果可以为鲁班七号提供超高的双抗收益，鲁班是一个后期英雄，需要减少前期被gank针对的机会，牛魔的1技能降低敌方英雄伤害，2技能减速控制和大招的AOE控制都可以有效的保护鲁班，在一些有利地形强势开团也可以配合鲁班七号打出爆炸伤害。</p>
                            </li>
                          </ul>

                          <h3>最佳搭档</h3>
                          <ul class="better">
                            <li>
                              <img src="../assets/images/186.jpg" alt="">
                              <p><p class="rela-text">太乙真人：鲁班七号本身没有位移，是敌方英雄主要针对目标，太乙真人的双控制技能与大招可以保障鲁班的输出环境，在追击时群眩晕稳定控制伤害也能配合鲁班轻松完成击杀。</p></p>
                            </li>
                            <li>
                              <img src="../assets/images/168.jpg" alt="">
                              <p>牛魔：牛魔的被动效果可以为鲁班七号提供超高的双抗收益，鲁班是一个后期英雄，需要减少前期被gank针对的机会，牛魔的1技能降低敌方英雄伤害，2技能减速控制和大招的AOE控制都可以有效的保护鲁班，在一些有利地形强势开团也可以配合鲁班七号打出爆炸伤害。</p>
                            </li>
                          </ul>

                          <h3>最佳搭档</h3>
                          <ul class="better">
                            <li>
                              <img src="../assets/images/186.jpg" alt="">
                              <p><p class="rela-text">太乙真人：鲁班七号本身没有位移，是敌方英雄主要针对目标，太乙真人的双控制技能与大招可以保障鲁班的输出环境，在追击时群眩晕稳定控制伤害也能配合鲁班轻松完成击杀。</p></p>
                            </li>
                            <li>
                              <img src="../assets/images/168.jpg" alt="">
                              <p>牛魔：牛魔的被动效果可以为鲁班七号提供超高的双抗收益，鲁班是一个后期英雄，需要减少前期被gank针对的机会，牛魔的1技能降低敌方英雄伤害，2技能减速控制和大招的AOE控制都可以有效的保护鲁班，在一些有利地形强势开团也可以配合鲁班七号打出爆炸伤害。</p>
                            </li>
                          </ul>
                        </div>

                    </div>
                </div>

                <div v-show="num==1">
                    2222
                </div>

            </section>

        </div>

    </main>
</template>


<script>

    export default{
        data(){

            return{
                n:0,
                num:0,
                listll:[
                    {
                        con:'英雄初识',

                    },
                    {
                        con:'进阶攻略',

                    }
                ],
                listpc:[
                    {src:'./src/assets/images/jn1.png'},
                    {src:'./src/assets/images/jn1.png'},
                    {src:'./src/assets/images/jn1.png'},
                    {src:'./src/assets/images/jn1.png'},
                ]

            }
        },
        methods:{
            change(a){
                console.log(this);
                this.num=a;
            },
            add(a){
                this.n=a;
            }
        }

    }
</script>
<style scoped>
body{
    background: chartreuse;
}
  #download{
    width: 100%;
    height: 48px;
    position: fixed;
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
    margin-top: 15px;
    font-size: 80%;
    color:white;
    font-weight:bold;
  }
  #nav p{
    font-size: 5px;
    color: gray;
  }
  #logo{
    display: block;
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
    width: 100px;
    height: 26px;
    float: right;
    margin-top:15px;
    font-size:85%;
    text-decoration:none;
    color:white;
    font-weight:bold;
  }
  #pad{
      width: 100%;
      height:48px;
  }
  .tu{
    width:100%;
    height:209.33px;
    background:url("../assets/images/lubanqihao.jpg") no-repeat;
    background-size: 100% 100%;
    position:absolute;

  }
  .tu>div{
      position:absolute;
      width:100%;
      height:104.89px;
      bottom:0px;
      margin-left:20px;
  }
  .tu>div p{
      color:white;
      font-weight:bold;

      margin-bottom:5px;
      font-size:13px
  }
  .tu .p1{
      font-size:25px
  }
  .tu .dibu{
      width:100%;
      height:14.14px;
  }
  .tu .dibu ul{
      float:left;
  }
  .dibu ul li{
      width:47.73px;
      height:14.14px;
      float:left;
      font-size:13px;
      color:white;
  }
  .dibu li span{
        font-size: 12px;
        padding:1px 4px;
        float:right;
        border: 1px solid #A2A2A2;
        border-radius: 50%;
        text-align: center;
        background:blue;

  }
  .yx{
      width:100%;
      height:2281px;
  }
  .yx .a{
      width: 100%;
      height: 43.22px;
      margin-left: 1%;
      margin-right: 1%;
      border-bottom: 1px solid #d4d9de;

  }
  .yx .a li{
      width:49%;
      height:19.67px;
      float:left;
      margin-top:12px;

      font-size:15px;
      text-align: center;
      padding-bottom: 1px;
  }
  .c{
    border-bottom:1px solid orange;
    color: orange;
}
.yx>section>div{
    width: 100%;
    height: 2131px;

}
.d{
    display: block;
}
.yx .one{
    height: 62.81px;
    width: 100%;
    margin-bottom: 20px;
}
.yx .one ul{
    width: 100%;
    height: 62.81px;
    margin-left: 10px;
    margin-right: 10px;
    border-bottom:1px solid #d4d9de;

}
.yx .one li{
    width: 50%;
    height: 62.81px;
    float: left;
    text-align: center;
}
.yx .one li>p{
    line-height: 62.81px;
    text-align: center;
}
.yx .one span{
    width: 10px;
    height: 10px;
    background-color: black;
    display: inline-block;
}
.jineng{
    width: 100%;
    height: 239.22px;
}
.jn{
    width: 100%;
    height: 67.42px;
    margin-left: 2%;
}
.jn li{
    width: 21%;
    height: 62.23px;
    margin: 0 2%;
    float: left;
    border-radius:50% ;

}
.jn li img{
    width: 66.23px;
    height: 66.23px;

}
.jineng>section div{
    width: 100%;
    height: 170.8px;
}
.jineng>section span{
    margin-top: 20px;
    margin-left: 10px;
    float: left;

}
.jineng>section p{
    margin-top: 20px;
    margin-left: 10px;
    float: left;
}
.jn2{
    width: 96%;
    height: 180.5px;
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 20px;
}
.jn2 li{
    width: 20%;
    height: 123.39;
    margin-top: 10px;
    margin-left: 2%;
    float: left;
    text-align: center;
}
.jn2 li img{
    width: 62.3px;
    height: 62.3px;
    margin-top: 10px;
}
.jn2 .zhs{
    width: 40%;
    height: 123.38px;
    text-align: center;
    margin-left: 10%;
}
.jn2 .zhs img{
    margin-left: 10px;
}
.jn2 .zhs span{
    margin-left: 20px;
}
.zb{
    width: 96%;
    height: 245px;
    margin-left: 2%;
    margin-right: 2%;
}
.zb p{
    margin-top: 15px;

}
.zb li{
    float: left;
    height: 72px;
    margin-left: 1%;
    margin-right: 1%;
    margin-top: 15px;
    width:14.66% ;

}
.zb li img{
    width: 100%;
    height: 48.23px;
    border-radius: 45%;
    float: left;
}
.zb li span{
    font-size: 10px;
    text-align: center;
}
.mw{
    margin-top: 15px;
    width: 96%;
    height: 168.3px;
    margin-left: 2%;
    margin-right: 2%;
}
.mw li{
    margin-top: 15px;
    margin-left: 2%;
    width: 31.33%;
    height: 107.67px;
    float: left;
}
.mw li img{
    float: left;
}
.mw li p{
    margin-top:10px ;
    float: left;
}
.jiqiao{
  width: 96%;
  height: 152.59px;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 30px;
}
.jiqiao h3{
  margin-top: 15px;
  margin-bottom: 15px;
}
.guanxi{
  width: 100%;
  height: 776.4px;
}
.better li{
  width: 96%;
  height: 132.34px;
  margin:15px 2%;
}
.better img{
  width: 52.6px;
  height: 52.6px;
  border-radius: 3px;
  float:left;
  display: block;

}
.better li p{
  width: 75%;
  float: left;
}
.guanxi h3{
  margin-top: 25px;
}
</style>
