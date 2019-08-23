import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(['@/components/pc/Home'], resolve)
    }, {
      path: '/err',
      name: 'Err',
      component: resolve => require(['@/components/pc/Error'], resolve)
    }
  ]
})

export default router
