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
      name: 'Index',
      component: Index,
      children: [
      	{
      		path: 'flow:id',
      		comonent: ImageFlow
      	},
      	{
      		path: 'details:id',
      		comonent: PicDetail	
      	},
      	{
      		path: 'map',
      		comonent: MapFlow	
      	}
      ]
    }
  ]
})
