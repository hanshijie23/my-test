<template>
  <div class="btn-component-div">
    <slot :data="data"></slot>
  </div>
</template>

<script>
export default {
  name: 'test-btn',
  props: [],
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="stylus">
.btn-component-div
  width 100%
  height 50px
</style>
