<!--
 * @Author: lili11.yang
 * @Date: 2024-02-29 15:18:41
 * @Description: 
 * @LastEditors: lili11.yang
 * @LastEditTime: 2024-02-29 17:07:46
-->
<template>
  <div>
    <div class="test">welcome to Nuxi !</div>
    <AppAlert> 这是一个自动导入的组件 </AppAlert>
    <!-- <img src="/test.jpg" alt=""> -->
  </div>
</template>
<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();

console.log(
  "%c [ runtimeConfig ]-10",
  "font-size:13px; background:pink; color:#bf2c9f;",
  runtimeConfig
);
</script>
<style lang="scss" scoped>
.test {
  // 使用全局变量
  color: $primary;
}
</style>
