// 假设我们通过前后端交互获得了以下JSON数据，包含了多个用户：
const student_list = '[{"name":"Gary","gender":1,"age":28,"major":"CS"},{"name":"Tom","gender":1,"age":22,"major":"Math"},{"name":"Jerry","gender":0,"age":25,"major":"Physics"},{"name":"Alice","gender":0,"age":30,"major":"Chemistry"},{"name":"Bob","gender":0,"age":27,"major":"Biology"}]';
// 将JSON字符串解析为JavaScript对象
const studentsOBJs = JSON.parse(student_list);

// 遍历学生列表，在遍历的过程中：
    // 1.获取到html中的<tbody>标签,
    // 2.创建新的<tr></tr>标签,将数据填充到<tr>标签中,
    // 3.将新创建的<tr>标签添加到<tbody>标签中
const tbody = document.querySelector('tbody');
studentsOBJs.forEach(studentOBJ => {
    // 创建空的<tr>标签
    const tr = document.createElement('tr');
    // 存放数据
    tr.innerHTML = `<td>${studentOBJ.name}</td><td>${studentOBJ.gender === 1? "Male":"Female"}</td><td>${studentOBJ.age}</td><td>${studentOBJ.major}</td>`;
    // 将新创建的<tr>标签添加到<tbody>标签中
    tbody.appendChild(tr);
});
