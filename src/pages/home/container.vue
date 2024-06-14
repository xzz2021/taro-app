<template>
    <view class="container_box">
    <view class="inner_box">
        <pricebox/>
        <constructorbox />
    </view>
    </view>

</template>

<script setup>
import { ref } from 'vue'
import constructorbox from './components/constructorbox.vue'
import pricebox from './components/pricebox.vue'
</script>

<style lang="scss">
.container_box{
    height: calc(70vh - 110px);
    border: 1px solid red;
    .inner_box{
    border: 1px solid red;
    height: 60%;
    margin: 50px;
    }
}
</style>