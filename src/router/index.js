import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home' 
import City from '../pages/city/City' 
import Detail from '../pages/detail/Detail' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',               //表示用户访问根路径的时候给用户展示home这个组件
      name: 'home',
      component: Home
    },
    {
      path: '/city',               
      name: 'city',
      component: City
    },
    {
      path: '/detail/:id', //动态路由
      name: 'detail',
      component: Detail
    }
  ]
})
