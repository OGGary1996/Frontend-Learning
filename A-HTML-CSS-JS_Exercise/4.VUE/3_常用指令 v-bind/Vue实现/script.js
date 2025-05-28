import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

// 假设我们通过前后端交互获得了以下JSON数据，包含了多个用户：
const student_list = '[{"name":"Gary","profile":"../../../resources/image/profile/IMG_1547.jpeg","gender":1,"age":28,"major":"CS"},{"name":"Tom","profile":"../../../resources/image/profile/IMG_1548.JPG","gender":1,"age":22,"major":"Math"},{"name":"Jerry","profile":"../../../resources/image/profile/IMG_1549.JPG","gender":0,"age":25,"major":"Physics"},{"name":"Alice","profile":"../../../resources/image/profile/IMG_1550.JPG","gender":0,"age":30,"major":"Chemistry"},{"name":"Bob","profile":"../../../resources/image/profile/IMG_1551.JPG","gender":1,"age":27,"major":"Biology"}]';
// 将JSON字符串解析为JavaScript对象
const studentsOBJs = JSON.parse(student_list);

const app = createApp({
    data(){
        return {
            students: studentsOBJs,
        }
    }
});
app.mount('#container');
