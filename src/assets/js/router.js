import VueRouter from 'vue-router'

import index from "../../components/index";
import home from "../../components/home";
import game from "../../components/game";
import gamea from "../../components/gamea";
import gameb from "../../components/gameb";
import gamec from "../../components/gamec";
import gamed from "../../components/gamed";
import gamee from "../../components/gamee";
import gamef from "../../components/gamef";
import gameg from "../../components/gameg";
import gameh from "../../components/gameh";
import strategy from "../../components/strategy";
import explosive from "../../components/explosive";
import story from "../../components/story";
import inherit from "../../components/inherit";
import experience from "../../components/experience";
import newborn from "../../components/newborn";
import shop from "../../components/shop";
import camp from "../../components/camp";
import official from "../../components/official";
import version from "../../components/version";
import environment from "../../components/environment";
import kings from "../../components/kings";
import design from "../../components/design";
import storyindex from "../../components/storyindex";
import world from "../../components/world";
import hero from "../../components/hero";
import appreciate from "../../components/appreciate";
import inherit1 from "../../components/inherit1";
import inherit2 from "../../components/inherit2";
import inherit3 from "../../components/inherit3";
import inherit4 from "../../components/inherit4";
import kings1 from "../../components/kings1";
import kings2 from "../../components/kings2";
import kings3 from "../../components/kings3";
import kings4 from "../../components/kings4";
import lubanqihao from "../../components/lubanqihao";
export default new VueRouter({
  routes: [
    {
      path:"/index",
      redirect: "/home",
      component: index,
      children:[
        {
          path: "/home",
          component: home
        },
        {
          path: "/strategy",
          component: strategy
        },
        {
          path:'/game',
          component:game,
          redirect:'/gamea',
          children:[
            {
              path:'/gamea',
              component:gamea
            },
            {
              path:'/gameb',
              component:gameb
            },
            {
              path:'/gamec',
              component:gamec
            },
            {
              path:'/gamed',
              component:gamed
            },
            {
              path:'/gamee',
              component:gamee
            },
            {
              path:'/gamef',
              component:gamef
            },
            {
              path:'/gameg',
              component:gameg
            },
            {
              path:'/gameh',
              component:gameh
            },

          ]
        },

      ]
    },
    {
      path: "/story",
      redirect: "/storyindex",
      component: story,
      children: [
        {
          path: "/storyindex",
          component: storyindex
        },
        {
          path: "/world",
          component: world
        },
        {
          path: "/hero",
          component: hero
        },
        {
          path: "/appreciate",
          component: appreciate
        }
      ]
    },
    {
      path: "/experience",
      component: experience
    },
    {
      path:'/lubanqihao',
      component:lubanqihao,
    },
    {
      path: "/inherit",
      redirect: "/inherit1",
      component: inherit,
      children: [
        {
          path:"/inherit1",
          component: inherit1
        },
        {
          path:"/inherit2",
          component: inherit2
        },
        {
          path:"/inherit3",
          component: inherit3
        },
        {
          path:"/inherit4",
          component: inherit4
        }
      ]
    },
    {
      path: "/camp",
      component: camp
    },
    {
      path: "/design",
      component: design
    },
    {
      path: "/kings",
      component: kings,
      redirect: "/kings1",
      children: [
        {
          path:"/kings1",
          component: kings1
        },
        {
          path:"/kings2",
          component: kings2
        },
        {
          path:"/kings3",
          component: kings3
        },
        {
          path:"/kings4",
          component: kings4
        },
      ]
    },
    {
      path: "/newborn",
      component: newborn
    },
    {
      path: "/shop",
      component: shop
    },
    {
      path: "/official",
      component: official
    },
    {
      path: "/environment",
      component: environment
    },
    {
      path: "/version",
      component: version
    },

    {
      path:"/explosive",
      component:explosive
    },
    {
      path:"/",
      redirect:"/index"
    }
  ]
})
