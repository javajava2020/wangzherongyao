<template>
  <div id="ex">
    <h1 class="hone"><span class="line"></span>王者荣耀爆料站<span class="tip">官方消息 一手掌握</span></h1>
    <img src="../assets/images/ela.jpg" alt="" width="100%">
      <div id="first">
        <ul :style="{height:shouheight}">
          <li v-for="item in firstlist">
            <div class="left">皮肤</div>
            {{item.name}}
            <span class="right">{{item.date}}</span>
          </li>
        </ul>
        <a @click="change">{{shouinfo}}</a>
      </div>
    <div id="last">
      <ul>
        <li v-for="item in herolist">
          <h1>{{item.title}}</h1>
          <h2>{{item.msg}}</h2>
          <div class="lun">
            <mt-swipe :auto="0">
              <mt-swipe-item v-for="i in item.srclist"><img :src="i" alt=""></mt-swipe-item>
            </mt-swipe>
          </div>
          <div class="show">{{item.all}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      shouinfo:'展开更多',
      shouheight:'135px',
      firstlist:[
        {name:'云鹰飞将-曜',date:'2020-08-06'},
        {name:'虎魄-张飞',date:'2020-07-21'},
        {name:'一念神魔-李信',date:'2020-07-14'},
        {name:'暗影游猎-马可波罗',date:'2020-07-03'},
        {name:'西部大镖客-猪八戒',date:'2020-07-01'}
      ],
      herolist:[
        {title:'皮肤',msg:'[云鹰飞将曜] 8月8日上线',all:'点击查看全部',
        srclist:[
          './src/assets/images/bao1.jpg',
          './src/assets/images/bao2.jpg',
          './src/assets/images/bao3.jpg',
          './src/assets/images/bao4.jpg',
          './src/assets/images/bao5.jpg',
          './src/assets/images/bao6.jpg'
        ]},
        {title:'英雄',msg:'秩序统领-蒙恬 6月2上线',all:'点击查看全部',
          srclist:[
            './src/assets/images/bao7.jpg',
            './src/assets/images/bao2.jpg',
            './src/assets/images/bao3.jpg',
            './src/assets/images/bao4.jpg',
            './src/assets/images/bao5.jpg',
            './src/assets/images/bao6.jpg'
          ]},
        {title:'玩法',msg:'玩法-1V1镜像站',all:'点击查看全部',
          srclist:[
            './src/assets/images/bao8.jpg',
            './src/assets/images/bao2.jpg',
            './src/assets/images/bao3.jpg',
            './src/assets/images/bao4.jpg',
            './src/assets/images/bao5.jpg',
            './src/assets/images/bao6.jpg'
          ]},
        {title:'系统',msg:'战队赛-全国大赛 1月9日上线',all:'点击查看全部',
          srclist:[
            './src/assets/images/bao9.jpg',
            './src/assets/images/bao2.jpg',
            './src/assets/images/bao3.jpg',
            './src/assets/images/bao4.jpg',
            './src/assets/images/bao5.jpg',
            './src/assets/images/bao6.jpg'
          ]},
        {title:'美术优化',msg:'龙骑士美术优化 8月11日上线',all:'点击查看全部',
          srclist:[
            './src/assets/images/bao10.jpg',
            './src/assets/images/bao2.jpg',
            './src/assets/images/bao3.jpg',
            './src/assets/images/bao4.jpg',
            './src/assets/images/bao5.jpg',
            './src/assets/images/bao6.jpg'
          ]}
      ]
    }
  },
  methods:{
    change(){
        if(this.shouinfo=='展开更多'){
          this.shouinfo = '收起';
          this.shouheight = '225px';
        }else{
          this.shouinfo = '展开更多';
          this.shouheight = '135px';
        }
    }
  }
}
</script>

<style>
.lun .mint-swipe-items-wrap{
  padding-bottom: 59%;
}
</style>
<style scoped>
 #ex{
  background-color: black;
  overflow: auto;
 }
 *{
   background-color: #121b2a;
   color:white;
  }
  .hone{
    display: block;
    width: 100%;
    height: 48px;
    background: url("../assets/images/index-title.jpg") no-repeat;
    background-size: 100%;
    color: white;
    overflow: hidden;
    line-height: 50px;
  }
  .line{
    display: block;
    float: left;
    width: 10px;
    height: 25px;
    background: url("../assets/images/line.png") no-repeat;
    background-size: 100%;
    margin-left: 10px;
    margin-top: 12px;
  }
  .tip{
    width: 100px;
    display: inline-block;
    background: url("../assets/images/tips-box.png") no-repeat;
    background-size: 100%;
    color: black;
    font-size: 10px;
    line-height: 12px;
    margin-left: 10px;
    text-align: center;
  }
  #first ul{
    height: 135px;
    overflow: hidden;
  }
  #first li{
    width: 100%;
    height: 45px;
    line-height: 45px;
  }
  #first .left {
    display: block;
    float: left;
    color: darkblue;
    border: 1px solid darkblue;
    border-radius: 5px;
    font-size: 10px;
    width: 30px;
    height: 18px;
    margin:10px 10px;
  }
  #first .right{
    display: block;
    float: right;
    color: gray;
    margin-right: 10px;
    font-size: 10px;
    width: 60px;
    height: 45px;
    line-height: 45px;
  }
  #first a{
    display: block;
    color: #a8935d;
    text-align: center;
    height: 45px;
    line-height: 45px;
    width: 100%;
  }
  #last ul{
    background-color: black;
  }
  #last li{
    padding-top: 20px;
    margin-top: 20px;
    height: 350px;
    width: 100%;
    text-align: center;
  }
  #last h1{
    color: #a8935d;
    font-weight: bold;
    font-size: 18px;
  }
  #last h2{
    margin: 5px auto;
    color: gray;
  }
  #last ul li .lun{
    width: 90%;
    margin: 10px auto;
  }
  #last ul li .lun img{
    width: 100%;
  }
  #last .show{
    color: #a8935d;
    height: 45px;
    line-height: 45px;
    background-color: #5A565A;
  }
</style>
