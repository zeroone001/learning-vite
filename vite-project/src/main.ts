import { createApp } from 'vue'
import { store, key } from './store';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router';
import App from './App.vue'
import { Edit } from '@element-plus/icons';


const app = createApp(App);
// 全局注册组件
app.component('edit', Edit);

app.use(ElementPlus);
app.use(store, key);
// 注入路由
app.use(router);
app.mount('#app');
