<!--
 * new page
 * @author: xzz2021
 * @since: 2024-06-13
 * constructorbox.vue
-->
<template>
    <view class="main_container">
      <itembox  v-for ="item in itemArr" :msg="item"/>
    </view>
  </template>
  
  <script setup>
  import itembox from './itembox.vue'
  import leftItem from './leftItem.vue'
  const itemArr = ref([
    {title:'3D扫描', description: '逆向抄数 瑕疵检测', url:'https://yun3d.com/filestore/assets/app/process1.jpg'},
    {title:'3D建模', description: '虚拟数字 智能化设计', url:'https://yun3d.com/filestore/assets/app/process1.jpg'},
    {title:'CNC加工', description: '铣削(3轴/4轴/5轴)/车削', url:'https://yun3d.com/filestore/assets/app/process1.jpg'}
  ])
  
  </script>
  
  <style lang="scss" >
  
  .iii{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
  </style>
  