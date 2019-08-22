<template>
  <div class="common-div">
    <div class="home-div">
      <div
        class="list-div"
        v-for="(item, index) in list"
        :key="index"
        @click="toPageDetails"
      >
        <span>name: {{item.name}}</span>
        <span>age: {{item.age}}</span>
        <span>gender: {{item.gender}}</span>
        <span>hobby: {{item.hobby}}</span>
        <span>job: {{item.job}}</span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import btnComponent from '../../common/button'
export default {
  name: 'home',
  components: {
    'test-btn': btnComponent
  },
  data () {
    return {
      list: [
        {
          name: 'james',
          age: 28,
          gender: 'male',
          hobby: 'backetball',
          job: 'leader'
        },
        {
          name: 'lebron',
          age: 13,
          gender: 'male',
          hobby: 'backetball',
          job: 'employee'
        },
        {
          name: 'harden',
          age: 30,
          gender: 'male',
          hobby: 'backetball',
          job: 'employee'
        },
        {
          name: '666666666666',
          age: 28,
          gender: 'female',
          hobby: 'football',
          job: 'employee'
        },
        {
          name: 'paul',
          age: 35,
          gender: 'man',
          hobby: 'backetball',
          job: 'manager'
        },
        {
          name: '77777777777777',
          age: 21,
          gender: 'man',
          hobby: 'football',
          job: 'manager'
        },
        {
          name: '77777777777777',
          age: 21,
          gender: 'man',
          hobby: 'football',
          job: 'manager'
        },
        {
          name: '77777777777777',
          age: 21,
          gender: 'man',
          hobby: 'football',
          job: 'manager'
        },
        {
          name: '77777777777777',
          age: 21,
          gender: 'man',
          hobby: 'football',
          job: 'manager'
        },
        {
          name: '77777777777777',
          age: 21,
          gender: 'man',
          hobby: 'football',
          job: 'manager'
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    toPageDetails () {
      this.$router.push({ path: '/home/detail' })
    }
  }
}
</script>

<style scoped lang='stylus'>
.common-div
  position absolute
  top 0
  width 100%
  height 100%
  .home-div
    position absolute
    top 0
    bottom 50PX
    width 100%
    overflow hidden
    overflow-y auto
    .list-div
      width 300px
      margin 5PX auto 15PX auto
      font-size 14px
      box-shadow 0PX 20PX 20PX -20PX #5E5E5E
      span
        display block
    .fixBtn
      position fixed
      bottom 10PX
</style>
