import Vue from 'vue'
import VueRouter from 'vue-router'
import cookie from '@/assets/js/cookie'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(['@/components/pc/Home'], resolve),
      meta: {
        requireAuto: false
      }
    },
    {
      path: '/next',
      name: 'Next',
      component: resolve => require(['@/components/pc/Next'], resolve),
      meta: {
        requireAuto: true
      }
    },
    {
      path: '/err',
      name: 'Err',
      component: resolve => require(['@/components/pc/Error'], resolve),
      meta: {
        requireAuto: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuto) {
    if (cookie.readCookie('test')) {
      next()
    } else {
      window.location.href = 'https://tcas.cango.com:8443/cas/login'
      next()
    }
  } else {
    next()
  }
})

export default router
