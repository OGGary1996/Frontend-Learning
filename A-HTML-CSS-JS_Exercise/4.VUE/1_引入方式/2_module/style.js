import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const app = createApp({
    data(){
        return {
            message1:'Hello Vue 3!',
            message2:'Using module',
        }
    }
});
app.mount('#container');
