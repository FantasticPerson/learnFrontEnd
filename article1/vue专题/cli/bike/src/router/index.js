import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import first from '../components/first'
import second from '../components/second'
import third from '../components/third'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/first'
    },
    {
      path: '/first',
      component:first
    },
    {
      path: '/second',
      component:second
    },
    {
      path: '/third',
      component:third
    }
  ]
})
