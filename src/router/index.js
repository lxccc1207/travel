import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/Home' //@表示src这个根目录

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',               //表示用户访问根路径的时候给用户展示helloworld这个组件
      name: 'home',
      component: home
    }
  ]
})