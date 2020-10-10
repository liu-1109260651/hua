import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Reg from '../views/register.vue'
import index from '../views/index.vue'
import Details from '../views/details.vue'
import Detailss from '../views/detailss.vue'
import Search from '../views/search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
   
    component: Login
  },{
    path:'/reg',
    component:Reg
  },
  {
    path:'/',
    component:index
  },
  {
    path:'/detail/:cid',
    component:Details
  },
  {
    path:'/detaill/:cid',
    component:Detailss
  },
  {
    path:'/search/:title',
    component:Search
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
