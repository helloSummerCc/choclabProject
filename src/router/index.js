import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import ImageFlow from '@/components/imageflow'
import PicDetail from '@/components/common/picdetail'
import MapFlow from '@/components/common/mapflow'

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
      component: ImageFlow,
      children: [
        {
          path: 'details/:id',
          component: PicDetail
        },
        {
           path: 'map',
           component: MapFlow  
         }
      ]
    }
  ]
})
