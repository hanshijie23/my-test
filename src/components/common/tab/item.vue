<template>
  <router-link :to="routerPath" tag="div" class="item-div">
    <slot name="icon"></slot>
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'tabItem',
  data () {
    return {
    }
  },
  props: {
    routerPath: {
      type: String,
      default: () => {
        return '/home'
      }
    }
  },
  methods: {
  },
  mouted () {
    console.log(this.itemTitle)
  }
}
</script>

<style lang='stylus' scoped>
.item-div
  flex 1
  height 100%
  width 100%
  display flex
  flex-direction column
  justify-content center
.activeClass
  color $red
</style>
