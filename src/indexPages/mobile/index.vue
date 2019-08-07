<template>
  <div class="mainDiv" id="mobile-common-div">
    <div v-for="(item, index) in list" :key="index" class="listDiv">
      <span>name: {{item.name}}</span>
      <span>age: {{item.age}}</span>
      <span>gender: {{item.gender}}</span>
      <span>hobby: {{item.hobby}}</span>
      <span>job: {{item.job}}</span>
    </div>
    <button class="fixBtn">显示列表</button>
    <test-btn></test-btn>
  </div>
</template>

<script>
import btnComponent from '@/components/common/button'
export default {
  name: 'App',
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
  }
}
</script>

<style scopde lang="stylus">
@import "../../assets/stylus/common.styl"
.mainDiv
  overflow: hidden;
  overflow-y: auto;
  margin-bottom 30px
  .listDiv
    border solid 1px black
    margin 20px 0px
    span
      display block
  .fixBtn
    position fixed
    bottom 10px
</style>
