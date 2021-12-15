# vuex@4 + TS


## 参考资料

[官方文档](https://v3.cn.vuejs.org/guide/typescript-support.html#npm-%E5%8C%85%E4%B8%AD%E7%9A%84%E5%AE%98%E6%96%B9%E5%A3%B0%E6%98%8E)

## 1. Vue 组件中 $store 属性的类型声明

Vuex 没有为 `this.$store` 属性提供开箱即用的类型声明

```js
// vuex.d.ts
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // 声明自己的 store state
  interface State {
    count: number
  }

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
```



## 2. store/index.ts

为了 `useStore` 能正确返回类型化的 store，必须执行以下步骤：

1. 定义类型化的 `InjectionKey`。
2. 将 store 安装到 Vue 应用时提供类型化的 `InjectionKey` 。
3. 将类型化的 `InjectionKey` 传给 `useStore` 方法。

```ts
// store.ts
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// 为 store state 声明类型
export interface State {
  count: number
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0
  },
    getters: {
        getCount (state) {
            return state.count
        }
    }
})
```

## 3. main.ts

将 store 安装到 Vue 应用时传入定义好的 injection ke

```ts
// main.ts
import { createApp } from 'vue'
import { store, key } from './store'

const app = createApp({ ... })

// 传入 injection key
app.use(store, key)

app.mount('#app')
```



## App.vue

将上述 injection key 传入 `useStore` 方法可以获取类型化的 store

```js
// vue 组件
import { useStore } from 'vuex'
import { key } from './store'

export default {
  setup () {
    const store = useStore(key)

    store.getters.getCount // 类型为 number
  }
}
```

完成

## 简化一下

#### store/index.ts

定义自己的 `useStore` 组合式函数

```ts
// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
```

#### App.vue

```ts
// vue 组件
import { useStore } from './store'

export default {
  setup () {
    const store = useStore()

    store.state.count // 类型为 number
  }
}
```

最终这就是vuex@4 + typescript 的使用方法
