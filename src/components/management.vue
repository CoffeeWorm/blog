<template>
  <div class="m-management">
    <div class="wrap">
      <EchartsLine></EchartsLine>
    </div>
    <div v-if="isLogin">
      <div class="wrap">
        <h2>相册设置</h2>
        <div class="number"></div>
        <div class="upload"></div>
        <div class="modify"></div>
        <div class="delete"></div>
      </div>
      <div class="wrap">
        <h2>日志设置</h2>
        <div class="upload"></div>
        <div class="modify"></div>
        <div class="delete"></div>
      </div>
    </div>
    <div class="wrap" v-else>
      <p class="tip">登录后设置更多</p>
    </div>
  </div>
</template>

<script>
import EchartsLine from "./echarts-line";
export default {
  components: { EchartsLine },
  mounted() {},
  data: () => ({
    isLogin: false
  })
};
</script>

<style>
</style>
