
<template>
  <view class="price_container">
    <view class="price_icon"></view>
  <span>{{title}}</span>
  </view>
</template>

<script setup>
 const props = defineProps({
   title: {
     type: String,
     default: ''
   }
 })
</script>

<style lang="scss">
.price_container {
  display: flex;
  align-items: center;
  // background-color: #f5f5f5;
  border-radius: 12px;
  // padding: 10px 20px;
  transition: background-color 0.3s ease;

  .price_icon {
    width: 10px;
    height: 32px;
    background-color: #005bff;
    border-radius: 10px;
    margin-right: 14px;
  }

  span {
    font-size: 32px;
    color: #005bff;
    font-weight: bolder;
    line-height: 32px;
  }
}

</style>
