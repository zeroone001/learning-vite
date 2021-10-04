

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <FooBarChild></FooBarChild> -->
  <hello-world ref="hw" msg="Hello Vue 3 + TypeScript + Vite" @handleChange="handleChange" ></hello-world>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95
/*  */
import { ref, onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
// import { FooBar as FooBarChild } from './components';
const handleChange = (msg) => {
  console.log(msg);
}
const hw = ref();
onMounted(() => {
  console.log('hw: ', hw.value.child);
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
