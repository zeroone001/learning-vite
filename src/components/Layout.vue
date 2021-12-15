<script setup lang="ts">
import {ref} from 'vue';
import FooBar from './FooBar.vue';

const fb = ref<InstanceType<typeof FooBar>>();
// fb.value?.count;
</script>
<template>
    <FooBar ref="fb"></FooBar>
    <header class="header-a">
        我是头部
        <div class="header"></div>
        
    </header>
    <router-view></router-view>
    <footer>
        我是页尾
    </footer>

</template>
<style lang="scss" scoped>

.header-a {
    color: $injectedColor;
    .header {
        width: 200px;
        height: 200px;
        border-radius: 50px;
        background: #e0cdcd;
        box-shadow:  -29px -29px 64px #beaeae,
                    29px 29px 64px #ffecec;
    }
}
</style>
