<template>
    <cover-view class="tab-bar">
      <cover-view class="tab-bar-border"></cover-view>
        <cover-view v-for="(item, index) in list" :key="index" class="tab-bar-item" @tap="switchTab(index, item.pagePath)">
          <!-- <cover-image :src="selected === index ? item.selectedIconPath : item.iconPath" /> -->
          <cover-view class="view" :style="{ color: selected === index ? selectedColor : color }">{{item.text}}</cover-view>
        </cover-view>
    </cover-view>
  </template>
  
  <script setup>
  import Taro from '@tarojs/taro'
  import { computed }  from 'vue'
  import { useTabbarStore } from '../store'
  import { storeToRefs } from 'pinia'

  const store = useTabbarStore()
  const { selected } = storeToRefs(store)
  const {  changeSelected } = store
  
  const color = '#000000'
  const selectedColor = '#DC143C'
  const list = [
    {
      pagePath: '/pages/home/index',
      text: '首页'
    },
    {
      pagePath: '/pages/upload/index',
      text: '上传报价'
    },
    {
      pagePath: '/pages/account/index',
      text: '我的'
    },
  ]
  
  const switchTab = (index, url) => {
    changeSelected(index)
    Taro.switchTab({ url })
  }
  
  </script>
  
  <style lang="scss">
  .tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 81px;  // 小程序 81px  ios android 48-56dp
    background: white;
    display: flex;
    padding-bottom: env(safe-area-inset-bottom);
  }
  
  .tab-bar-border {
    background-color: rgba(0, 0, 0, 0.33);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
  }
  
  .tab-bar-item {
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  
  .tab-bar-item .cover-view {
    font-size: 20px;
  }
  </style>