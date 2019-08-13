<template>
  <div class="mobile-common-div" id="mobile-common-div">
    <router-view></router-view>
    <div class="main-bottom-btn" v-show="$route.meta.showMainBtn">
      <router-link class="tab-div" :to="item.path" tag="div" v-for="(item,index) in mainBtnList" :key="index">
        <i></i>
        <span>{{item.title}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mainBtnList: [
        {title: '首页', path: '/home'},
        {title: '组件', path: '/components'},
        {title: '首页', path: '/home3'},
        {title: '首页', path: '/home4'}
      ]
    }
  }
}
</script>

<style lang="stylus">
@import "../../assets/stylus/common.styl"
.main-bottom-btn
  position absolute
  bottom 0
  height 50px
  width 100%
  display flex
  .tab-div
    height 100%
    flex 1
.main-bottom-btn::before
  content ''
  position absolute
  top 0
  width 100%
  height 1px
  background-color #DBDBDB
.activeClass
  color blue
</style>
