<script setup>
  // 定义响应式数据
  import { ref } from 'vue';
  
  // 定义props
  const props = defineProps({
    students: {
      type: Array,
      required: true,
    }
  })

  const hoveredStudentName = ref('');

  // 定义方法，控制鼠标进入和离开的事件
  // 鼠标进入时，设置hoveredStudentName为当前学生的名字，配合v-bind:style实现了样式更改
  const handleMouseEnter = (name) => {
    hoveredStudentName.value = name;
  }
  // 鼠标离开时，清空hoveredStudentName，配合v-bind:style实现了样式更改
  const handleMouseLeave = () => {
    hoveredStudentName.value = '';
  }

</script>

<template>
  <div id="table">
    <table>
      <thead>
      <tr>
        <th>Index</th>
        <th>Name</th>
        <th>Profile</th>
        <th>Gender</th>
        <th>Age</th>
        <th>Major</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(student,index) in students" :key="index"
          v-bind:style="{fontWeight: student.name === hoveredStudentName ? 'bold':'normal'}"
          v-on:mouseenter="handleMouseEnter(student.name)"
          v-on:mouseleave="handleMouseLeave">
        <td>{{index+1}}</td>
        <td>{{student.name}}</td>
        <td><img v-bind:src="student.profile" v-bind:alt="student.name"></td>
        <td>{{student.gender === 1 ? "Male":"Female"}}</td>
        <td>{{student.age}}</td>
        <td>
          <span v-if="student.major === 0">CS</span>
          <span v-else-if="student.major === 1">Math</span>
          <span v-else-if="student.major === 2">Physics</span>
          <span v-else-if="student.major === 3">Chemistry</span>
          <span v-else-if="student.major === 4">Biology</span>
          <span v-else-if="student.major === 5">English</span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  #table{
    width:95%;
    border:1px solid #ccc;
    border-radius:20px;
    margin:20px auto;
    padding:10px;
    display:flex;
    justify-content:center;
    align-items:center;
  }

  table{
    width:100%;
    height:100%;
    text-align:center;
  }
  table img{
    max-width: 50px;
    max-height: 50px;
    width:auto;
    height:auto;
  }

  table tr:nth-child(even){
    background-color: lightblue;
  }

</style>