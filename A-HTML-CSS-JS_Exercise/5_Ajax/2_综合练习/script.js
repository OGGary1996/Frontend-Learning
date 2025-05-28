import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

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
            students: null,
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

        // 搜索和显示全部的方法
        handleSearch(){
            // 通过Ajax请求数据
            fetch('./student_list.json',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.searchForm) // 将表单数据转换为JSON字符串,进行匹配
            }).then(response => response.json())
                .then(data => {
                // 通过Ajax请求数据
                this.students = data.students;
            })
        },
        handleShow(){
            this.searchForm.name = '';
            this.searchForm.gender= '';
            this.searchForm.age = '';
            //通过再次执行handleSearch方法，来显示全部
            this.handleSearch();
        }
    },
});

app.mount('#app');


