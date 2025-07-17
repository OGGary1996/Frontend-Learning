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
      <el-form :model="searchForm" :inline="true">
        <el-form-item label="Name:">
          <el-input v-model="searchForm.name" placeholder="Enter name"></el-input>
        </el-form-item>
        <el-form-item label="Gender:">
          <el-select v-model="searchForm.gender">
            <el-option label="Not Specify" value=""></el-option>
            <el-option label="Male" value="1"></el-option>
            <el-option label="Female" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Age:">
          <el-input v-model="searchForm.age"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="emitSearch">Search</el-button>
          <el-button type="primary" @click="emitClear">Show All</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
  #search{
    width:95%;
    height:60px;
    border:1px solid #ccc;
    border-radius:20px;
    margin:20px auto;
    padding:25px;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
</style>