<template>
    <view class="card">
        <view class="content">
          <h2 class="item_title">3D扫描</h2>
          <p>逆向抄数 瑕疵检测</p>
        </view>
  <view class="image-container">
    <img src="https://yun3d.com/filestore/assets/app/item.png" alt="3D Scanner">
  </view>
</view>
 </template>
 
 <script setup>
 
 </script>
 
 <style lang="scss">
 .card {
  display: flex;
  align-items: center;
  border-radius: 24px;
//   border:  1px solid red;
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
    .item_title{
        font-weight: 600;
        margin: 15px 10px;
        color: #000000;
    }
    p {
        margin-left: 10px;
      font-size: 18px;
      color: #565656;
    }
  }
}

 </style>