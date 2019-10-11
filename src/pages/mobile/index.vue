<template>
  <div id="mobile-common-div">
    <div class="mobile-common-div" :style="$route.meta.showMainBtn?'bottom: 50PX':'bottom: 0'">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <tab-list>
      <tab-item routerPath="/home">
        <img slot="icon" src="../../assets/icon/icon1@2x.png" style="width: 20px">
        <span>首页</span>
      </tab-item>
      <tab-item routerPath="/components">
        <span>组件</span>
      </tab-item>
      <tab-item routerPath="/mine">
        <span>我</span>
      </tab-item>
    </tab-list>
  </div>
</template>

<script>
import TabList from '../../components/common/Tab/list'
import TabItem from '../../components/common/Tab/item'
export default {
  data () {
    return {
    }
  },
  components: { TabList, TabItem }
}
</script>

<style lang="stylus" scoped>
.mobile-common-div
  position absolute
  top 0
  left 0
  width 100%
</style>
