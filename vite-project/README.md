# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## vite 特点

1. 冷服务启动，ES6 import
2. 热更新
3. 按需进行编译，不会刷新全部DOM

## 安装

```shell
npm init @vitejs/app
npm i @types/node -D
 npm i node-sass sass -D
```



## setup 语法糖

在setup语法糖中倒入组件，不需要注册声明，直接使用


## HMR(Hot Module Replacement)热更新又称热替换

HMR 的核心就是客户端从服务端拉取更新后的文件。准确的说是 chunk diff(chunk 需要更新的部分)，

实际上 WDS(webpack-dev-server)与浏览器之间维护了一个 websocket 进行通信。

当本地资源发生变化后， WDS 会向浏览器推送更新，并带上构建时的 hash，让浏览器与上一次的资源进行对比

客户端对比出差异后会向 WDS 发起 Ajax 请求来获取更改内容(文件列表、hash),也就是请求 update.json，

这样客户端就可以再借助这些信息继续向 WDS 发起 jsonp 请求获取该 chunk 的增量更新也就是请求 update.js。更新的 js 是存储在内存中的


## 参考资料

[2021年了，vite能投入生产了吗？vite.config.js配置踩坑](https://juejin.cn/post/6989475484551610381)








