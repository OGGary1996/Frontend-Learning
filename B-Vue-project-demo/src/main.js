import { createApp } from 'vue' // 导入 Vue 创建应用的函数createApp()
import './style.css' // 导入全局样式
import App from './App.vue' // 导入根组件

// 创建 Vue 应用并挂载到 DOM 元素上
// 在之前的Vue使用示例中，我们并没有使用跟组件，而是手动创建 -> createApp({...}).mount('#app')
createApp(App).mount('#app')
