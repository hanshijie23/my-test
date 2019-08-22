import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'activeClass',
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: resolve => require(['@/components/mobile/levelOnePages/Home'], resolve),
    meta: {
      title: 'homePage',
      showMainBtn: true
    },
    children: [{
      path: 'detail',
      name: 'detail',
      component: resolve => require(['@/components/mobile/levelTwoPages/Details'], resolve),
      meta: {
        title: 'detail',
        showMainBtn: false
      }
    }]
  },
  {
    path: '/components',
    name: 'components',
    component: resolve => require(['@/components/mobile/levelOnePages/Components'], resolve),
    meta: {
      title: 'componentsHome',
      showMainBtn: true
    }
  }]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
