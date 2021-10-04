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
