import Vue from 'vue'
import Router from 'vue-router'
import user from './userRouter'

Vue.use(Router)
//解决重复点击相同路由报错
const routerPush=Router.prototype.push;
Router.prototype.push = function push (location){
  return routerPush.call(this,location)
}

export default new Router({
  routes: [
    ...user,
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   // component: ()=>import('@/components/HelloWorld')
    // },
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'],resolve)
    }
  ]
})
