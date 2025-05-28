import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const app = createApp({
    data(){
        return {
            score:0,
        }
    }
});

app.mount('#container');
