
<template>
  <view class="price_container">
    <view class="icon"></view>
  <span>上传报价</span>
  </view>
</template>

<script setup></script>

<style lang="scss">
.price_container {
  display: flex;
  align-items: center;
  // background-color: #f5f5f5;
  border-radius: 12px;
  // padding: 10px 20px;
  transition: background-color 0.3s ease;

  .icon {
    width: 12px;
    height: 30px;
    background-color: #005bff;
    border-radius: 5px;
    margin-right: 8px;
  }

  span {
    font-size: 30px;
    color: #005bff;
    font-weight: bolder;
    line-height: 30px;
  }
}

</style>
