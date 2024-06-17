<template>
   <view class="upload_tabbar"> 
    <view> 上传报价 </view>

    <uploadFile />
      
      <selectionBox />
   </view>
</template>

<script setup>
import selectionBox from './selection/index.vue'
import uploadFile from  './uploadFile/index.vue'
</script>

<style>
.upload_tabbar{
   background: #f1f4f9;
}
</style>