import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import ImageFlow from '@/components/imageflow'
import PicDetail from '@/components/picdetail'
import MapFlow from '@/components/mapflow'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/flow',
      component: ImageFlow
    },
    {
      path: '/details/:id',
      component: PicDetail
    },
    {
       path: 'map',
       component: MapFlow  
     }
  ]
})
