<script setup>
  import SearchForm from "./SearchForm.vue";
  import DisplayStudentList from "./DisplayStudentList.vue"

  // 定义响应式数据
  import { ref,onMounted,computed } from 'vue';
  const students = ref([]); // 定义空数组,用于存储钩子函数中获取到的学生数据
  const total = ref(0); // 定义总数,用于存储学生数据的总数
  const searchForm = ref({
    name: '',
    gender: '',
    age: ''
  }); // 定义搜索表单空对象,用于存储子组件传递过来的搜索条件

  // 定义搜索方法，使用于子组件emit的search事件，接收子组件传递过来的搜索条件
  const getSearchForm = (searchFormParam) => {
    searchForm.value = searchFormParam; // 将子组件传递过来的搜索条件赋值给searchForm
  }

  // 定义获取方法，获取所有学生数据
  const fetchAllStudents = () => {
    // 模拟获取数据
    fetch('src/assets/student_list.json') // 使用fetch API获取本地JSON文件
        .then(response => response.json())
        .then(data => {
          students.value = data.students; // 将获取到的数据赋值给上面定义的students空数组
          total.value = data.total; // 将获取到的学生数据总数赋值给total
        })
        .catch(error => {
          console.error('Error fetching student data:', error);
        });
  }
  // 定义钩子方法，设置子组件挂载之后执行获取所有数据的方法
  onMounted(async () => {
    fetchAllStudents();
  });

  // 定义计算属性，过滤学生数据
  const studentsFilter = computed(() => {
    return students.value.filter(student => {
      // 匹配名称
      const nameMatch = searchForm.value.name === '' || student.name.toLowerCase().includes(searchForm.value.name.toLowerCase());
      // 匹配性别
      const genderMatch = searchForm.value.gender === '' || student.gender === Number(searchForm.value.gender);
      // 匹配年龄
      const ageMatch = searchForm.value.age === '' || student.age === Number(searchForm.value.age);
      // 返回匹配结果
      return nameMatch && genderMatch && ageMatch;
    });
  })

</script>

<template>
  <!-- @表示监听子组件emit的方法，并绑定到某个方法 -->
  <SearchForm @search="getSearchForm"/>
  <DisplayStudentList :students="studentsFilter" :total="total" />
</template>

<style scoped>

</style>