import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

// 假设我们通过前后端交互获得了以下JSON数据，包含了多个用户：
const student_list = '[{"name":"Gary","gender":1,"age":28,"major":"CS"},{"name":"Tom","gender":1,"age":22,"major":"Math"},{"name":"Jerry","gender":0,"age":25,"major":"Physics"},{"name":"Alice","gender":0,"age":30,"major":"Chemistry"},{"name":"Bob","gender":0,"age":27,"major":"Biology"}]';
// 将JSON字符串解析为JavaScript对象
const studentOBJs = JSON.parse(student_list);
// 使用Vue.js创建一个应用实例，并且将数据传递给它
const app = createApp({
    data(){
        return {
            students: studentOBJs,
        }
    }
});
app.mount('#container');
