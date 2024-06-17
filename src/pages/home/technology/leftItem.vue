<template>
    <view class="left_card">
        <view class="content">
          <h2 class="item_title">3D打印</h2>
          <p>SLA/SLS/MUF等多种工艺</p>
        </view>
  <view class="image-container">
    <img src="https://yun3d.com/filestore/assets/app/process1.jpg" alt="3D Scanner">
  </view>
</view>
 </template>
 
 <script setup>
 
 </script>
 
 <style lang="scss">
 .left_card {
    line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  border-radius: 24px;
  flex-direction: column;
//   border:  1px solid red;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  margin: 20px 0;
  height: 426rpx;
  overflow: hidden;
  background: #ffffff;

  .content {
    flex: 3;
display: flex;
    flex-direction: column;
    justify-content: center;
    .item_title{
        color: #005bff;
        font-weight: bolder;
    font-size: 30px;
    }
    p {
        margin-left: 10px;
      font-size: 18px;
      color: #565656;
    }
  }
  .image-container {
    flex: 7;
    // border-radius: 8px;
    width: 100%;
    img {
        width: 100%;
    height: 100%;
    object-fit: cover;
    }
  }


}

 </style>