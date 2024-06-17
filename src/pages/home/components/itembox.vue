<template>
    <view class="right_card">
        <view class="content">
          <h2 class="item_title">{{msg.title}}</h2>
          <p>{{ msg.description }}</p>
        </view>
  <view class="image-container">
    <img :src="msg.url" alt="3D Scanner">
  </view>
</view>
 </template>
 
 <script setup>
 const props = defineProps({
   msg: {
     type: Object,
     default: () => ({})
   }
 })
 </script>
 
 <style lang="scss">
 .right_card {
  display: flex;
  align-items: center;
  border-radius: 24px;
//   border:  1px solid red;
background: #ffffff;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  margin: 20px 0;
  height: 130rpx;
  overflow: hidden;
  .image-container {
    flex: 7;
    display: flex;
    justify-content: center;
    align-items: center;
    // border-radius: 8px;
    width: 150rpx;
    height: 130rpx;
    img {
        width: 100%;
    height: 100%;
    object-fit: cover;
    }
  }

  .content {
    flex: 10;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    justify-content: center;
    .item_title{
        font-weight: 600;
        color: #000000;
        margin: 0 0 5px 10px;
    font-size: 30px;

    }
    p {
      font-size: 18px;
      color: #565656;
      margin-left: 10px;
    }
  }
}

 </style>