import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const app = createApp({
    data(){
        return {
            message:'',
        }
    },
    methods: {
        // 向服务器发送请求
        getData(){
            const xhr = new XMLHttpRequest();
            xhr.open('GET', './Hello.txt', true);
            xhr.onload = () =>{
                if (xhr.status === 200) {
                    this.message = xhr.responseText;
                }else{
                    this.message = 'Failed to load data';
                }
            }
            xhr.onerror = () =>{
                this.message = 'Network error';
            }
            xhr.send()
        }
    }
});

app.mount('#container');
