import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Indexs from '../views/indexs'
import About from '../views/AboutView.vue'
import Online from '../views/online.vue'
import Help from '../views/help.vue'
import Service from '../views/service.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Indexs,
    meta: {
      title:"首页"
    }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      title: ""
    }
  },
  {
    path: '/online',
    component: Online,
    meta: {
      title: "在线学习"
    }
  },
  {
    path: '/help',
    component: Help,
    meta: {
      title: "帮助中心"
    }
  },
  {
    path: '/service',
    component: Service,
    meta: {
      title: "服务条款"
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: "关于我们"
    }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
