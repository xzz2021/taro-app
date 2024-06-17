<template>
    <view class="container_box">
    <view class="inner_box">
        <pricebox title="上传报价"/>
        <constructorbox />

    </view>
    <view class="inner_box2">

        <pricebox title="经典案例"/>
        <classiccase />

    </view>
    </view>

</template>

<script setup>
import { ref } from 'vue'
import constructorbox from './technology/index.vue'
import pricebox from './pricebox.vue'
import classiccase from './classiccase/index.vue'
</script>

<style lang="scss">
.container_box{
    height: calc(70vh - 110px);
    // border: 1px solid red;
    padding: 0 50px;
    .inner_box{
    // border: 1px solid red;
    margin-top: 30px;
    // height: 60%;
    }
    .inner_box2{
    margin-top: 20px;

    }
}
</style>