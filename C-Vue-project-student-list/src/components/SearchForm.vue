<script setup>
  // 定义搜索表单的响应式数据
  import { ref } from 'vue';
  const searchForm = ref(
      {
        name: '',
        gender: '',
        age: ''
      }
  )
  // 定义emit事件
  const emit = defineEmits(['search']);

  // 定义emit方法
  // emit 搜索事件，传递给父组件，具体搜索方法在父组件中实现
  const emitSearch = () => {
    emit('search', searchForm.value); // 传递搜索表单
  }
  // emit 显示所有事件，传递给父组件，具体显示所有方法在父组件中实现
  const emitClear = () => {
    // 首先清空搜索条件
    searchForm.value.name = '';
    searchForm.value.gender = '';
    searchForm.value.age = '';
    // 然后emit clear事件
    emit('search', searchForm.value); // 传递空的搜索表单
  }

</script>

<template>
  <div id="search">
    <div id="searchForm">
      <form action="#" method="get">
        <span>Search 👉</span>&nbsp;
        <label for="studentName">Name:</label>
        <input v-model="searchForm.name" type="text" id="studentName" name="name">&nbsp;
        <label for="studentGender">Gender:</label>
        <select v-model="searchForm.gender" name="gender" id="studentGender">
          <option value="" selected>Not Specify</option>
          <option value="1" >Male</option>
          <option value="0" >Female</option>
        </select>&nbsp;
        <label for="studentAge">Age:</label>
        <input v-model="searchForm.age" type="text" id="studentAge" name="age">
      </form>
    </div>
    <div id="buttons">
      <input type="button" value="Show All" v-on:click="emitClear" id="clearBtn">
      <input type="button" value="Search" v-on:click="emitSearch" id="searchBtn">
    </div>
  </div>
</template>

<style scoped>
  #search{
    width:90%;
    height:40px;
    border:1px solid #ccc;
    border-radius:20px;
    margin:20px auto;
    padding:20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
</style>