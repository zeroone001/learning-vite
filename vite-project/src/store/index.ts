import { InjectionKey } from 'vue';
// 
import { Store, createStore, useStore as baseUseStore, } from 'vuex';

// 手动声明 state 类型
export interface State {
    name: string
}

// 定义注入类型
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
      name: 'liuyongsheng'
    },
    getters: {
        getName: (state) => {
            return state.name
        }
    },
    mutations: {
        SET_NAME(state, data: string) {
            state.name = data;
        }
    }
  })

//   定义usestore 组合函数
export function useStore () {
    return baseUseStore(key);
}