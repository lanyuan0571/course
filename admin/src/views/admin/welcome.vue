<template>
  <div>
    <h3>您好,欢迎登录ACE</h3>
  </div>
</template>
<script>
export default {
  name: 'welcome',
  mounted: function () {
    this.$parent.activeSidebar("welcome-sidebar")
  },
  methods: {}
}
</script>