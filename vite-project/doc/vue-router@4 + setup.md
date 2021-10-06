# vue-router@4



## 参考资料

[官方文档](https://next.router.vuejs.org/zh/guide/index.html)

## router/index.ts



createWebHashHistory: 创建一个hash 历史记录，对于没有主机的 web 应用程序 (例如 `file://`)，或当配置服务器不能处理任意 URL 时这非常有用。**注意：如果 SEO 对你很重要，你应该使用 [`createWebHistory`](https://next.router.vuejs.org/zh/api/#createwebhistory)**



```js
import {createRouter, createWebHashHistory} from 'vue-router';
import Layout from '../components/Layout.vue';

const routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import("../pages/Home.vue")
            }
        ]
    }
]

const router = createRouter({
    routes,
    // hash的形式
    history: createWebHashHistory()
});

/**
 * 路由守卫
 */
router.beforeEach((guard) => {
    console.log('guard', guard);
});
export default router;

```

## App.vue



```vue
<template>
	<router-view></router-view>
</template>  
<script setup lang="ts">
	// 引入路由对象
import { useRouter } from "vue-router";
    // 实例化路由
let router = useRouter();
</script>
```

## main.ts

```js
import { createApp } from 'vue'
import { store, key } from './store';
import router from './router';
import App from './App.vue'

const app = createApp(App);
app.use(store, key);
app.use(router);
app.mount('#app');

```

