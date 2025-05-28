import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const app = createApp({
    data(){
        return {
            students:null,
        }
    },
    methods: {
        // 向服务器发送请求
        getData(){
            fetch('./student_list.json')
                .then(response => response.json())
                .then(data => this.students = data.students)
                .catch(error => console.error('Error fetching data:', error));
        }
    }
});

app.mount('#container');
