# vue-router 面试题



## 切换路由后，新页面要滚动到顶部或保持原先的滚动位置怎么做呢？

```js
const route = new Router({
    mode: 'hash',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
})
```

## 什么是命名视图，举个例子说明一下？

```html
<template>
  <div>
    <div>
        //...头部导航
        <router-view name='header'></router-view>
    <div>
        //...侧边栏导航
        <router-view name='sider'></router-view>
    </div>
    <div>
        //...主内容
        <router-view/>
    </div>
  </div>
</template>

```

```js
function load(component) {
    return resolve => require([`views/${component}`], resolve);
}
const routes=[
    {
        path: '/',
        redirect: '/home',
        name: 'layout',
        component: load('layout'),
        children: [
            {
                path: '/home',
                name: 'home',
                components: {
                    default: load('main'),
                    header: load('header'),
                    sider: load('sider')
                },
                meta: {
                    title: '首页'
                },
            },
        ]
    }
]

```

关键在于components 注意这里有个s, router-view 上是需要name的

## 如何获取路由传过来的参数

```js
// query
this.$router.push({
    path: '/',
    query: {
        name: '123'
    }
})
// 获取
this.$route.query.name // '123'

// params 传参，麻烦一点，需要先在path上面配置
{
    path: '/home/:id',
    name: 'home',
    component: load('home'),
    meta: {
        title: '首页'
    },
},
this.$router.push({
    name: 'home',
    params: {
        id: 123
    }
})
// 跳转页面获取
this.$route.params.id // 123
```

##  `$router` 和 `$route` 区别

 `$router`

是router实例，

相当于获取了整个路由文件

```js
导航守卫
router.beforeEach((to, from, next) => {
  /* 必须调用 `next` */
})
router.beforeResolve((to, from, next) => {
  /* 必须调用 `next` */
})
router.afterEach((to, from) => {})

动态导航到新路由
router.push
router.replace
router.go
router.back
router.forward

```

`$route`

当前激活的路由信息对象，里面的属性是只读的，不过可以通过watch监听

```js
export default {
    watch: {
        '$route' (val, oldVal) {
            console.log(val.query);
        }
    }
}
```



```js
fullPath: ""  // 当前路由完整路径，包含查询参数和 hash 的完整路径
hash: "" // 当前路由的 hash 值 (锚点)
matched: [] // 包含当前路由的所有嵌套路径片段的路由记录 
meta: {} // 路由文件中自赋值的meta信息
name: "" // 路由名称
params: {}  // 一个 key/value 对象，包含了动态片段和全匹配片段就是一个空对象。
path: ""  // 字符串，对应当前路由的路径
query: {}  // 一个 key/value 对象，表示 URL 查询参数。跟随在路径后用'?'带的参数
```



## Vue 路由怎么打开新的窗口

```js
const obj = {
    path: xxx,//路由地址
    query: {
       mid: data.id//可以带参数
    }
};
const {href} = this.$router.resolve(obj);
window.open(href, '_blank');

```



