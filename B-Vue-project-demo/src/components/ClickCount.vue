<!--<script>
  // export default{
  //   data() {
  //     return {
  //       count: 0
  //     }
  //   },
  //   methods: {
  //     countIncrement(){
  //       this.count++;
  //     }
  //   }
  // }
</script>-->
<script setup>
  // 引入Vue的ref函数，用于创建响应式数据,类比 data()
  import {ref} from 'vue'
  // 定义一个响应式变量count，初始值为0
  const count = ref(0); // 接收到的的值是Ref<any,any>类型
  // 定义方法，类比 methods
  const countIncrement = function(){
    count.value++ ; // 访问响应式变量的值需要使用.value,不能直接使用count
  }
</script>

<template>
  <div class="button-container">
    <button type="button" v-on:click="countIncrement">Click Count: {{count}}</button>
  </div>
</template>

<style scoped>

</style>