<template>
  <view   >
    <text style="font-size: 20px">{{msg}}</text>
  </view>
</template>

<script>
export default {
  name: "c-aaa",
  props: {
    
  },
  data() {
    return {
      msg: "c-aaa组件\n标题都不写，这不是什么善茬"
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>