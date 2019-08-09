<template>
  <div class="btn-component-div">
    <button class="btn-component-style">测试btn</button>
  </div>
</template>

<script>
export default {
  name: 'test-btn',
  props: []
}
</script>

<style scoped lang="stylus">
.btn-component-div
  position fixed
  bottom 0px
  width 100%
  height 50px
  .btn-component-style
    display block
    width 300px
    height 100%
    background linear-gradient(132deg,rgba(255,136,96,1) 0%,rgba(245,101,97,1) 100%)
    border-radius 50px
    margin 0 auto
    color #ffffff
    font-size 20px
    letter-spacing 2px
    line-height 50px
</style>
