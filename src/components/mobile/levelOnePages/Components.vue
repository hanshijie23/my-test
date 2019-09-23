<template>
  <div class="components-common-div"></div>
</template>

<script>
import diyBtn from '../../common/Button'
export default {
  name: 'components',
  components: { 'diy-btn': diyBtn }
}
</script>

<style lang="stylus" scoped>
.components-common-div
  position absolute
  top 0
  bottom 0
  width 100%
  overflow hidden
  overflow-y auto
</style>
