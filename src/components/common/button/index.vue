<template>
  <div class="btn-component-div">
    <button class="btn-component-style"></button>
    <slot></slot>
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
  width 100%
  height 50px
  .btn-component-style
    display block
    width 300px
    height 100%
    background $red
    border-radius 50px
    margin 0 auto
    color $white
    font-size 20px
    letter-spacing 2px
    line-height 50px
</style>
