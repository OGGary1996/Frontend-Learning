// 假设我们通过前后端交互获得了以下JSON数据，包含了多个用户：
const student_list = '[{"name":"Gary","profile":"../../../resources/image/profile/IMG_1547.jpeg","gender":1,"age":28,"major":"CS"},{"name":"Tom","profile":"../../../resources/image/profile/IMG_1548.JPG","gender":1,"age":22,"major":"Math"},{"name":"Jerry","profile":"../../../resources/image/profile/IMG_1549.JPG","gender":0,"age":25,"major":"Physics"},{"name":"Alice","profile":"../../../resources/image/profile/IMG_1550.JPG","gender":0,"age":30,"major":"Chemistry"},{"name":"Bob","profile":"../../../resources/image/profile/IMG_1551.JPG","gender":1,"age":27,"major":"Biology"}]';
// 将JSON字符串解析为JavaScript对象
const studentsOBJs = JSON.parse(student_list);

// 获取tbody元素
const tbody = document.querySelector('tbody');
// 遍历学生对象数组
studentsOBJs.forEach(studentOBJ => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${studentOBJ.name}</td><td><img src="${studentOBJ.profile}" alt="${studentOBJ.name}"></td><td>${studentOBJ.age}</td><td>${studentOBJ.gender === 1 ? "Male":"Female"}</td><td>${studentOBJ.major}</td>`;
    tbody.appendChild(tr);
})
