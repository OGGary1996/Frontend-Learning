import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const profiles = `[{"profile":"../../../resources/image/profile/IMG_1547.jpeg"},{"profile":"../../../resources/image/profile/IMG_1548.JPG"}]`;

const profileList = JSON.parse(profiles);

const app = createApp({
    data(){
        return {
            profiles:profileList,
            isShow: true,
        }
    },
    methods:{
        toggle(){
            this.isShow = !this.isShow; // 反转isShow的值
        }
    }
});
app.mount('body');
