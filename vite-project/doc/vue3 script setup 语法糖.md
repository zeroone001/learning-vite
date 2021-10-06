# Vue3 单文件组件 script setup 语法糖



## script setup

在script标签上加上setup

```vue
<script setup lang="ts"></script>
```

### 组件自动注册

不需要使用components 进行注册了

建议使用 PascalCase 格式以保持一致性

```vue
<script setup>
import MyComponent from './MyComponent.vue'
</script>

<template>
  <MyComponent />
</template>
```

### defineProps 和 defineEmits

这两个API不需要单独引入，可以直接使用

```vue
<script setup>
const props = defineProps({
  foo: String
})

const emit = defineEmits(['change', 'delete'])
// setup code
</script>
```

### defineExpose

子组件暴露变量和方法

```vue
<!-- child -->
<script setup>
import { ref } from 'vue'

const a = 1
const b = ref(2)

defineExpose({
  a,
  b
})
</script>
<!-- parent -->
<script setup>
    const child = ref();
    console.log(child.value.a)
 </script>
```

### 顶层的绑定会暴露给模板

顶层的绑定 (包括变量，函数声明，以及 import 引入的内容) 都能在模板中直接使用

import导入的内容也会以同样的方式暴露，也就是说，可以在模板中直接使用导入的函数

```vue
<script setup>
// 变量
const msg = 'Hello!'

// 函数
function log() {
  console.log(msg)
}
</script>

<template>
  <div @click="log">{{ msg }}</div>
</template>
```

```vue
<script setup>
import { capitalize } from './helpers'
</script>

<template>
  <div>{{ capitalize('hello') }}</div>
</template>
```

### 响应式

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>
```

### 动态组件

```vue
<script setup>
import Foo from './Foo.vue'
import Bar from './Bar.vue'
</script>

<template>
  <component :is="Foo" />
  <component :is="someCondition ? Foo : Bar" />
</template>
```

### `useSlots` 和 `useAttrs`

