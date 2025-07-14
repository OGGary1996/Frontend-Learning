<!-- 定义JS，控制模板部分的数据和行为（JS） -->
<script setup>
import Logo from './components/Logo.vue'
import Intro from './components/Intro.vue'
import ClickCount from './components/ClickCount.vue'
</script>

<!-- 模版部分，控制页面结构（HTML） -->
<template>
  <!-- Vite & Vue Logo -->
  <Logo/>
  <!-- 传递msg给HelloWorld中的变量msg -->
  <Intro msg="Vite + Vue" />
  <!-- 引入Button -->
  <ClickCount/>
</template>

<!-- 当前组件的CSS样式 -->
<style scoped>

</style>
