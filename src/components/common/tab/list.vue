<template>
  <div class="position-bottom-btn-div" v-show="$route.meta.showMainBtn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabList',
  data () {
    return {
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
.position-bottom-btn-div::before
  content ''
  position absolute
  top 0
  width 100%
  height 1PX
  background-color $border-color
</style>
