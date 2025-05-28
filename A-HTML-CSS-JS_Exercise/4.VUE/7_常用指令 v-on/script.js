import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const app = createApp({
    data(){
        return {
            count:0,
        }
    },
    methods:{
        increment(){
            this.count++;
        }
    }
});
app.mount('body');
