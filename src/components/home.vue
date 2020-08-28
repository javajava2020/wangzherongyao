<template>
  <div id="home">
    <div id="pic">
      <mt-swipe :auto="5000">
        <mt-swipe-item><img src="../assets/images/l1.jpeg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/l2.jpeg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/l3.jpeg" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <div id="one" :style="{height: shouheight}">
      <ul :style="{height:shouheight,width:shouwidth}">
        <li v-for="(v,i) in one" :style="{width: shouliwidth}">
          <router-link :to="v.path" v-if="i<8" :style="{backgroundPosition:v.position}">
            <span>{{v.con}}</span>
          </router-link>
          <router-link :to="v.path" v-else :style="{backgroundPosition:v.position,backgroundImage:`url(${v.src})`,backgroundSize:'30px',backgroundRepeat:'no-repeat'}">
            <span>{{v.con}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div id="show" @click="change"><span id="shou"></span>{{shoumsg}}</div>
    <div id="news">
      <div class="newsnav">
        <div class="newslogo"></div>
        <div class="news2">新闻资讯</div>
        <div class="newslast">...</div>
      </div>
      <div id="newslist">
        <ul class="first">
          <li v-for="(item,index) in newslist"><a @click="flagnews=index" :class="{back:flagnews==index}">{{item.name}}</a></li>
        </ul>
        <div class="left">
          <ul v-for="(item,index) in newslist" v-show="flagnews==index">
            <li v-for="con in item.newcon"><span>{{item.name}}</span>{{con.msg}}</li>
          </ul>
        </div>
        <div class="right">
          <ul v-for="(item,index) in newslist" v-show="flagnews==index">
            <li v-for="con in item.newcon">{{con.date}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div id="hero">
      <div class="newsnav">
        <div class="newslogo"></div>
        <div class="news2">英雄列表</div>
        <div class="newslast">...</div>
      </div>
      <div id="pica"><img src="../assets/images/阿古多.jpg" alt="" width="100%"></div>
      <div id="herolist">
        <ul class="first">
          <li v-for="(item,index) in herolist"><a @click="flaghero=index" :class="{back:flaghero==index}">{{item.name}}</a></li>
        </ul>
        <div class="left">
          <ul v-for="(item,index) in herolist" v-show="flaghero==index" :style="{height:item.heroheight}" :class="{tran:true}">
            <li v-for="con in item.heroimg"><router-link to="/lubanqihao"><img :src="con.src" alt="">{{con.heroname}}</router-link></li>
          </ul>
        </div>
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
  </div>
</template>

<script>
export default {
  data(){
    return{
      shoumsg:'展开',
      shouheight:'70px',
      shouwidth:'300%',
      shouliwidth:'8%',
      one:[
        {
          path:"/explosive",
          con:'爆料站',
          position:'-204px 423px',
        },
        {
          path: "/story",
          con:'故事站',
          position:'-305px 423px',
        },
        {
          path: "/shop",
          con:'周边商城',
          position:'-103px 3px',
        },
        {
          path: "/experience",
          con:'体验服',
          position:'0px 423px',
        },
        {
          path: "/newborn",
          con:'新人专区',
          position:'96px 0px',
        },
        {
          path: "/inherit",
          con:'荣耀传承',
          position:'-103px 423px',
        },
        {
          path: "/camp",
          con:'王者营地',
          position:'-204px 0px',
        },
        {
          path: "/official",
          con:'公众号',
          position:'34px 48px',
        },
        {
          path:"/version",
          con:'版本介绍',
          position:'30px 0px',
          src:'./src/assets/images/版本介绍.png'
        },
        {
          path:"/environment",
          con:'对局环境',
          position:'30px 8px',
          src:'./src/assets/images/对局环境.png'
        },
        {
          path:"/kings",
          con:'无限王者团',
          position:'30px 0px',
          src:'./src/assets/images/无限王者团.png'
        },
        {
          path:"/design",
          con:'创意互动营',
          position:'30px 0px',
          src:'./src/assets/images/创意互动营.png'
        }
      ],
      newslist:[
        {name:'热门',
          newcon:[
            {
            msg: '8月22日体验服停机更新公告',
            date: '08/22'
          },
          {
            msg: '"IOS14 Beta4"系统启动问题建议处理公告',
            date: '08/21'
          },
          {
            msg: '8月21日建议更新公告',
            date: '08/21'
          },
          {
            msg: '8月20日体验服停机更新公告',
            date: '08/20'
          },
          {
            msg: '8月19日游戏环境声明及处罚公告',
            date: '08/19'
          }]},
        {name:'新闻',
        newcon:[
          {
            msg:'缘起峡谷，情定七夕 | 我所爱的，都在王',
            date:'08/24'
          },
          {
            msg:'听说，小妲己偷偷从峡谷溜去云南了?',
            date:'08/24'
          },
          {
            msg:'狗粮满满|最动人的情书读给你听',
            date:'08/23'
          },
          {
            msg:'英雄调整情报 | 杨戬/苏烈加强，阿古多',
            date:'08/18'
          },
          {
            msg:'主播入驻游戏圈，发帖赢大奖!',
            date:'08/18'
          }]},
        {name:'公告',
        newcon:[
          {
            msg: '8月22日体验服停机更新公告',
            date: '08/22'
          },
          {
            msg: '"IOS14 Beta4"系统启动问题建议处理公告',
            date: '08/21'
          },
          {
            msg: '8月21日建议更新公告',
            date: '08/21'
          },
          {
            msg: '8月20日体验服停机更新公告',
            date: '08/20'
          },
          {
            msg: '8月19日游戏环境声明及处罚公告',
            date: '08/19'
          }]},
        {name:'活动',
        newcon:[
          {
            msg:'恭喜TS夺得世冠总冠军，回馈福利来袭',
            date:'08/17'
          },
          {
            msg:'恭喜TS夺得世冠总冠军，回馈福利来袭',
            date:'08/11'
          },
          {
            msg:'恭喜TS夺得世冠总冠军，回馈福利来袭',
            date:'08/11'
          },
          {
            msg:'恭喜TS夺得世冠总冠军，回馈福利来袭',
            date:'08/13'
          },
          {
            msg:'恭喜TS夺得世冠总冠军，回馈福利来袭',
            date:'07/28'
          }]},
        {name:'赛事',
        newcon: [
          {
            msg:'2020年王者荣耀世界冠军杯总决赛门票8',
            date:'08/08'
          },
          {
            msg:'2020年王者荣耀世界冠军杯总决赛门票8',
            date:'08/08'
          },
          {
            msg:'2020年王者荣耀世界冠军杯总决赛门票8',
            date:'08/08'
          },
          {
            msg:'2020年王者荣耀世界冠军杯总决赛门票8',
            date:'08/08'
          },
          {
            msg:'2020年王者荣耀世界冠军杯总决赛门票8',
            date:'08/08'
          }]}],
      herolist:[
        {heroheight:'174px',name:'热门',heroimg:[
            {src:'./src/assets/images/112.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/167.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/109.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/150.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/166.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/193.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/196.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/142.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/106.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
          ]},
        {heroheight:'522px',name:'战士',heroimg: [
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
          ]},
        {heroheight:'522px',name:'法师',heroimg: [
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
          ]},
        {heroheight:'435px',name:'坦克',heroimg: [
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
          ]},
        {heroheight:'348px',name: '刺客',heroimg: [
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
          ]},
        {heroheight:'261px',name: '射手',heroimg: [
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
          ]},
        {heroheight:'261px',name: '辅助',heroimg: [
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
            {src:'./src/assets/images/169.jpg',heroname:'鲁班七号'},
          ]}
      ],
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
      ],
      flagvideo:0,
      flaghero:0,
      flagnews:0
    }
  },
  methods:{
    change(){
      if(this.shouheight=='70px') {
        this.shouheight = '210px';
        this.shouwidth = '100%';
        this.shouliwidth = '25%';
        this.shoumsg = '收起'
      }else{
        this.shouheight = '70px',
          this.shouwidth = '300%',
          this.shouliwidth = '8%',
          this.shoumsg = '展开'
      }
    }
  }
}
</script>
<style>

#pic .mint-swipe-items-wrap{
  padding-bottom: 42.5%;
}
#pic .mint-swipe-indicators{
  left: 85%;
}
#pic .mint-swipe-indicator{
  width: 10px;
  height: 10px;
  display: inline-block;
  float: right;
  border-radius: 3px;
  margin: 0 3px;
  background-color: white;
  opacity: 1;
}
#pic .mint-swipe-indicator.is-active{
  background-color: #4747ac;
}
</style>
<style scoped>
#one{
  width: 100%;
  height: 70px;
  overflow: auto;
}
#one ul{
  height: 70px;
}
#one li{
  float: left;
  height: 70px;
}
#one a{
  display: block;
  width: 100%;
  height: 50px;
  margin: 10px auto;
  background-image: url("../assets/images/index.png");
  background-size: 400px;
  border-right: 1px solid gray;
  position: relative;
  text-decoration: none;
}
#one ul li:nth-child(11) {
  background-size: 500px;
}
#one a span{
  display: block;
  color: gray;
  font-size: 70%;
  text-align: center;
  position: relative;
  text-align: center;
  top: 30px;
}
#pic {
  width: 100%;
}
#pic img{
  width: 100%;
}
#show{
  color: black;
  text-align: center;
  line-height: 30px;
  font-size: 70%;
  width: 100%;
  height: 30px;
  background-color: #f9f9f9;
  position: relative;
}
#shou{
  width: 10px;
  height: 10px;
  display: block;
  background-image: url("../assets/images/index.png");
  background-size: 400px;
  position: absolute;
  left: 43%;
  top: 10px;
}
#news{
  width: 100%;
  margin: 10px auto;
  height: 271px;
  border-bottom: 1px solid gray;
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
  width: 20px;
  height: 20px;
  background: url("../assets/images/index.png") no-repeat 0px -295px;
  background-size: 500px;
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
#newslist{
  height: 210px;
  margin: 12px;
  position: relative;
}
.first{
  width: 100%;
  font-size: 80%;
  height: 22px;
  line-height: 22px;
  margin-bottom: 10px;
}
#newslist .first li a{
  height: 20px;
  text-decoration: none;
  padding-bottom: 2px;
}
#hero .first{
  height: 42px;
  line-height: 42px;
}
.first li{
  float: left;
  width: 20%;
  text-align: center;
  vertical-align: middle;
}
#hero .first li{
  width: 14%;
  border-top: 1px solid gray;
}
.first .back{
  color: orange;
  border-bottom: 2px solid orange;
}
#newslist .left{
  font-size: 85%;
  position: absolute;
  left: 0px;
  margin-left: 10px;
}
#newslist .left ul{
  display: block;
  width: 100%;
  height: 170px;
}
#newslist .left ul li{
  display: block;
  height: 20px;
  line-height: 20px;
  margin-bottom: 15px;
}
#newslist .right ul li{
  display: block;
  height: 20px;
  line-height: 20px;
  margin-bottom: 15px;
}
#newslist .right{
  font-size: 80%;
  position: absolute;
  margin-right: 10px;
  color: gray;
  right: 0px;
}
#newslist .left span{
  border: 1px solid orange;
  border-radius: 3px;
  width: 30px;
  height: 18px;
  color: orange;
  font-size: 60%;
  text-align: center;
  line-height: 18px;
  position: relative;
  top: -1px;
}
#hero{
  width: 100%;
  margin: 10px auto;
  transition: all 10s linear;
}
#pica{
  width: 95%;
  margin: 0px auto 10px;
}
#hero .left ul{
  height: 218px;
}
#hero .left ul li{
  float: left;
  margin-left: 10px;
  width: 58px;
  height: 87px;
  text-align: center;
  font-size: 12px;
}
#hero .left ul li img{
  width: 100%;
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
a{
  text-decoration: none;
  color: black;
}
</style>
