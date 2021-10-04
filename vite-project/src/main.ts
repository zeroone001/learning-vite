import { createApp } from 'vue'
import { store, key } from './store';
import router from './router';
import App from './App.vue'

const app = createApp(App);
app.use(store, key);
// 注入路由
app.use(router);
app.mount('#app');
