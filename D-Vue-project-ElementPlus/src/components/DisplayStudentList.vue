<script setup>
  // 定义props
  const props = defineProps({
    students: {
      type: Array,
      required: true,
    },
    total: { // 接收总数,用于分页组件
      type: Number,
      required: true,
    }
  });

  // 定义响应式数据,主要是用于分页选项
  import { ref,onMounted,computed } from 'vue';
  const currentPage = ref(1); // 当前页码,默认为1
  const pageSize = ref(10); // 每页显示的条数,默认为10

  // 定义方法，用于处理页码变化和每页条数变化
  const handlePageSizeChange = (newPageSize) => {
    pageSize.value = newPageSize;  // 更新每页条数
  };
  const handleCurrentChange = (newPage) => {
    currentPage.value = newPage; // 更新当前页码
  };
  // 定义分页展示和核心方法
  const pagination = () => {
    // 计算分页的起始索引
    const start = (currentPage.value - 1) * pageSize.value;
    // 计算分页的结束索引
    const end = start + pageSize.value;
    // 更新students为当前页的数据
    return props.students.slice(start, end);
  };

  // 定义钩子函数，使得挂载时，按照默认的currentPage和pageSize进行分页
  onMounted(() => {
    pagination();
  });
  // 定义计算属性，如果currentPage或pageSize变化，动态调整结果的切片
  const students = computed(() => {
    return pagination();
  });

</script>

<template>
  <!-- 显示区域 -->
  <div id="table">
    <el-table :data="students" height="500" align="center"  stripe style="width: 90%">
      <!-- 序号 -->
      <el-table-column type="index" label="Index" />
      <!-- 姓名 -->
      <el-table-column prop="name" label="Name"  width="180" />
      <!-- 头像,使用额外的一层template标签嵌套，#default="{row: student}"表示students数组中的每个元素 -->
      <!-- 同样使用v-bind:src和v-bind:alt绑定图片的src和alt属性 -->
      <el-table-column label="Profile" width="180">
        <template #default="{row: student}">
          <img v-bind:src="student.profile" v-bind:alt="student.name" style="width: 60px; border-radius: 50%">
        </template>
      </el-table-column>
      <!-- 性别 -->
      <el-table-column label="Gender"  >
        <template #default="{row: student}">
          <span>{{student.gender === 1 ? 'Male' : 'Female'}}</span>
        </template>
      </el-table-column>
      <!--年龄-->
      <el-table-column prop="age" label="Age"/>
      <!-- 专业 -->
      <el-table-column label="Major">
        <template #default="{row: student}">
          <span v-if="student.major === 0">CS</span>
          <span v-else-if="student.major === 1">Math</span>
          <span v-else-if="student.major === 2">Physics</span>
          <span v-else-if="student.major === 3">Chemistry</span>
          <span v-else-if="student.major === 4">Biology</span>
          <span v-else-if="student.major === 5">English</span>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <!-- 页码框 -->
  <div class="pagination-block">
    <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :total="total"
        :page-sizes="[5,10,20,50]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handlePageSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>

</template>

<style scoped>
.pagination-block {
  margin-top: 10px;
}
.pagination-block {
  margin-bottom: 16px;
}
#table {
  width: 95%;
  margin: 20px auto;
  background-color: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}
</style>