<template>
  <div id="mobile-common-div">
    <div class="mobile-common-div" :style="$route.meta.showMainBtn?'bottom: 50PX':'bottom: 0'">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <tab-list></tab-list>
  </div>
</template>

<script>
import TabList from '../../components/common/tab'
export default {
  data () {
    return {
    }
  },
  components: {TabList}
}
</script>

<style lang="stylus" scoped>
.mobile-common-div
  position absolute
  top 0
  left 0
  width 100%
</style>
