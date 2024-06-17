<template>
  <nut-tabbar class="tab-bar" v-model="active" @tab-switch="tabSwitch"  unactive-color="#7d7e80" active-color="#1648d3"  >
    <nut-tabbar-item v-for="(item,index) in List" :name="item.name" :key="index"  :tab-title="item.title" :icon="item.icon">
    </nut-tabbar-item>
  </nut-tabbar>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { Home, Category, Find, Cart, My } from '@nutui/icons-vue-taro'
import Taro from '@tarojs/taro';
// import {useTabbarStore } from '../store'
// const { selected } = storeToRefs(useTabbarStore())
const active = ref('home')
const List = [
  {
    title: '首页',
    icon: h(Home),
    name: 'home'
  },
  {
    title: '模型库',
    icon: h(Category),
    name: 'modelLibrary'
  },
  {
    title: '上传报价',
    icon: h(Find),
    name: 'upload'
  },
  {
    title: '订单',
    icon: Cart,
    name: 'order'
  },
  {
    title: '我的',
    icon: h(My),
    name: 'account'
  }
]

const tabSwitch = (item: Record<string, unknown>, index: number) => {
  if(Taro.getEnv()== 'WEAPP'){
    Taro.switchTab({
      url: `/pages/${item.name}/index`
    });
  }else{
    Taro.navigateTo({
      url: `/pages/${item.name}/index`
    });
  }
  console.log("🚀 ~ file: index.vue:49 ~ active.value:", active.value)
}

</script>

<style>
.tab-bar{
  /* pointer-events: auto;
  position: absolute; */
}
</style>
