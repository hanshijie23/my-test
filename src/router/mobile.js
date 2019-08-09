import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/components/mobile/levelOnePages/Home'], resolve),
      meta: {
        headerMsg: {
          title: 'homePage'
        }
      },
      children: [
        {
          path: 'detail',
          name: 'detail',
          component: resolve => require(['@/components/mobile/levelTwoPages/Details'], resolve),
          meta: {
            headerMsg: {
              title: 'detail'
            }
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.headerMsg.title
  next()
})

export default router
