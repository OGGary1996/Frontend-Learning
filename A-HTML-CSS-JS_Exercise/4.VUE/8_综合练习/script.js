import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

// 假设我们通过前后端交互获得了以下JSON数据，包含了多个用户：
const student_list = '[{"name":"Gary","profile":"../../../resources/image/profile/IMG_1547.jpeg","gender":1,"age":28,"major":0},{"name":"Tom","profile":"../../../resources/image/profile/IMG_1548.JPG","gender":1,"age":22,"major":1},{"name":"Jerry","profile":"../../../resources/image/profile/IMG_1549.JPG","gender":0,"age":25,"major":2},{"name":"Alice","profile":"../../../resources/image/profile/IMG_1550.JPG","gender":0,"age":30,"major":3},{"name":"Bob","profile":"../../../resources/image/profile/IMG_1551.JPG","gender":1,"age":27,"major":4}]';
// 将JSON字符串解析为JavaScript对象
const studentsOBJs = JSON.parse(student_list);

// 创建Vue应用
const app = createApp({
    data(){
        return {
            searchForm:{
                name:'',
                gender:'',
                age:'',
            },
            hoveredStudentName: null,
            students: studentsOBJs,
        }
    },
    computed:{
        filteredStudents() {
            return this.students.filter(student => {
                // 匹配名称
                const nameMatch = this.searchForm.name === '' || student.name.toLowerCase().includes(this.searchForm.name.toLowerCase());
                // 匹配性别
                const genderMatch = this.searchForm.gender === '' || student.gender === Number(this.searchForm.gender);
                // 匹配年龄
                const ageMatch = this.searchForm.age === '' || student.age === Number(this.searchForm.age);
                // 返回匹配结果
                return nameMatch && genderMatch && ageMatch;
            });
        }
    },
    methods:{
        // 本方法用于确认目前鼠标进入的tr标签中，是哪一个学生
        // 用于在tr标签中进行匹配
        handleMouseEnter(studentName){
            this.hoveredStudentName = studentName;
        },
        // 将学生名字的指针清空
        handleMouseLeave(){
            this.hoveredStudentName = null;
        },
        handleClear(){
            this.searchForm.name = '';
            this.searchForm.gender= '';
            this.searchForm.age = '';
        }
    },
});

app.mount('#app');


