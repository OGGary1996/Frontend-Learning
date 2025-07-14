<script setup>
import Title from './components/Title.vue'
import FetchAPI from './components/FetchAPI.vue'
</script>

<template>
  <div id="app">
    <Title />
    <FetchAPI />
  </div>
</template>

<style scoped>
#app {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
}
</style>
