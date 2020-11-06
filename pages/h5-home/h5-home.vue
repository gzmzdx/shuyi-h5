<template>
  <c-page ref="page" title="书易首页" :tabbar="true" type="content">
    <text v-text="msg"></text>
  </c-page>
</template>

<script>
export default {
  name: "h5-home",
  data() {
    return {
      msg: "h5-home页面"
    }
  },
  methods: {},
  mounted() {},
  created() {},
}
</script>

<style lang="scss" scoped>

</style>