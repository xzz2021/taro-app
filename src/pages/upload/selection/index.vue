<template>
    <view> 上传报价 </view>
    <div>
    <!-- <nut-row>
    <nut-col v-for="(item, index) in btnArr" :span="6">
        <nut-button plain type="info" size="small">{{item.title}}</nut-button>
    </nut-col>
  </nut-row> -->
  <nut-radio-group v-model="val1" direction="horizontal">
    <nut-radio v-for="(item, index) in btnArr" :label="index" shape="button" size="small">{{item.title}}</nut-radio>
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
 .content {
  line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background: #ff8881;
  margin-bottom: 10px;
}
.light {
  background: #ffc7c4;
}

/* .nut-radio__button--active::after{
    color: #22b9f5; 
} */
 </style>