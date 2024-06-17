<template>
    <view> 选择服务 </view>
    <div class="selection_container">
    <!-- <nut-row>
    <nut-col v-for="(item, index) in btnArr" :span="6">
        <nut-button plain type="info" size="small">{{item.title}}</nut-button>
    </nut-col>
  </nut-row> -->
  <nut-radio-group v-model="val1" direction="horizontal">
    <nut-radio v-for="(item, index) in btnArr" :label="index" shape="button" size="small" >{{item.title}}</nut-radio>
  </nut-radio-group>
    </div>
 </template>
 
 <script setup>
//  import { Row, Col } from '@nutui/nutui-taro'
import { ref } from 'vue'
const btnArr = [
    { title: '3D打印' , },
    { title: '3D扫描' , },
    { title: '3D建模' , },
    { title: 'CNC加工', },
]
const val1 = ref(0)
 </script>
 
 <style>
 .selection_container{
  --nut-primary-color: #1648d3; /* 设置主色调 */
 }
 </style>