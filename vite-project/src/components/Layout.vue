<script setup lang="ts">


</script>
<template>
    <header>
        我是头部
        <div class="header"></div>
    </header>
    <router-view></router-view>
    <footer>
        我是页尾
    </footer>
</template>
<style scoped>
.header {
    width: 200px;
    height: 200px;
    border-radius: 50px;
background: #e0cdcd;
box-shadow:  -29px -29px 64px #beaeae,
             29px 29px 64px #ffecec;
}
</style>