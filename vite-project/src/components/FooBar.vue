<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup () {
        const count = ref<number>(0);
        // `evt` 将会是 `any` 类型
        const handleChange = (evt: Event) => {
        console.log((evt.target as HTMLInputElement).value) // 此处 TS 将抛出异常
        }
        return {
            count,
            handleChange
        }
    }
})
</script>
<template>
    <div class="abc">
        footbar++ {{ count }}
        <input type="text" @change="handleChange" />
    </div>
</template>