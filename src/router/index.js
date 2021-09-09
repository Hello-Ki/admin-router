import Vue from 'vue'
import VueRouter from 'vue-router'

import MyLogin from '../components/MyLogin.vue'
import MyHome from '../components/MyHome.vue'

import MyUsers from '../components/menus/MyUsers.vue'
import MyRights from '../components/menus/MyRights.vue'
import MyGoods from '../components/menus/MyGoods.vue'
import MyOrders from '../components/menus/MyOrders.vue'
import MySettings from '../components/menus/MySettings.vue'

import MyUserDetail from '../components/user/MyUserDetail.vue'
import pathArr from '../pathArr.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: MyLogin },
    {
      path: '/home',
      component: MyHome,
      redirect: '/home/users',
      children: [
        { path: 'users', component: MyUsers },
        { path: 'rights', component: MyRights },
        { path: 'goods', component: MyGoods },
        { path: 'orders', component: MyOrders },
        { path: 'settings', component: MySettings },
        { path: 'userinfo/:id', component: MyUserDetail, props: true }
      ]
    }
  ]
})

// 路由的全局前置守卫
router.beforeEach(function (to, from, next) {
  if (pathArr.indexOf(to.path) !== -1) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
