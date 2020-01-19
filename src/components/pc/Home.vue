<template>
  <div>
    <div>Home</div>
    <router-link tag="button" to="/next">next</router-link>
    <el-input></el-input>
  </div>
</template>

<script>
import { Input } from 'element-ui'
export default {
  name: 'Home',
  components: { 'el-input': Input }
}
</script>

<style lang="stylus" scoped></style>
