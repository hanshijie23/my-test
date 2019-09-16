<template>
  <div class="position-bottom-btn-div" v-show="$route.meta.showMainBtn">
    <router-link class="tab-div" :to="item.path" tag="div" v-for="(item,index) in mainBtnList" :key="index">
      <i></i>
      <span>{{item.title}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      mainBtnList: [
        { title: '首页', path: '/home' },
        { title: '组件', path: '/components' },
        // { title: '首页', path: '/home3' },
        { title: '我', path: '/mine' }
      ]
    }
  },
  methods: {
  },
  mouted () {
  }
}
</script>

<style lang='stylus' scoped>
.position-bottom-btn-div
  position absolute
  bottom 0
  height 50PX
  width 100%
  display flex
  text-align center
  .tab-div
    height 100%
    flex 1
    display flex
    flex-direction column
    justify-content center
  .activeClass
    color $red
.position-bottom-btn-div::before
  content ''
  position absolute
  top 0
  width 100%
  height 1PX
  background-color $border-color
</style>
