

<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
// 引入路由对象
/*
 useRouter： 返回 router 实例。相当于在模板中使用 $router。必须在 setup() 中调用。
 */
import { onMounted } from 'vue';
import { useRouter, useRoute } from "vue-router";

// 实例化路由
let router = useRouter();

const route = useRoute();
/*  */
const mode = import.meta.env;

console.log('mode:', mode.VITE_APP_PORT);


onMounted(()=> {
  console.log('router____>', router);

  console.log('route: ', route.fullPath);
})


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
