<template>
  <img alt="Vue logo" src="/images/logo.png" />
  <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-icon :size="20" color="red">
      <edit></edit>
    </el-icon>
    <div class="abc">刘永胜啦啦啦啦啦</div>
   <!-- <hello-world ref="hw" msg="Hello Vue 3 + TypeScript + Vite" @handleChange="handleChange" >
     <template v-slot:content>
       <div>
         <span>这是slot {{ slotName }}</span>
       </div>
     </template>
   </hello-world> -->
</template>

<script setup lang="ts">
// https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95
/*  */
import { ref, onMounted } from 'vue';
// import { useStore } from 'vuex';
import { useStore } from '@/store';
// import HelloWorld from '../components/HelloWorld.vue'
// useRouter
import { useRoute } from "vue-router";

// 将上述 injection key 传入 useStore 方法可以获取类型化的 store
const store = useStore();

const route = useRoute();
console.log('route----->', route.name);

const handleChange = (msg: string) => {
  console.log(msg);
}
// const hw = ref<InstanceType<typeof HelloWorld>>();
const hw = ref();

// let valModel = ref(true);

let slotName = ref('slot---->');
onMounted(() => {
  console.log('hw2: ', hw.value.open());
  console.log('store', store.getters.getName);
  
})
</script>

<style lang="scss">
$color: red;
.abc {
  color: $injectedColor;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
