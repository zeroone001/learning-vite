/* 声明文件声明Vue自定义类型 */
import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module "@vue/runtime-core" {
  interface State {
    name: string;
  }
  // 为this.$store 提供声明
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
