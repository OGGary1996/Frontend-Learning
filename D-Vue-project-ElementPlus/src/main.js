import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入Element Plus
import ElementPlus from 'element-plus'
// 引入Element Plus的样式
import 'element-plus/dist/index.css'

const app = createApp(App);
// 使用Element Plus
app.use(ElementPlus);
// 挂载应用
app.mount('#app');
