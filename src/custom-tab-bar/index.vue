<template>
  <nut-tabbar v-model="activeName" @tab-switch="tabSwitch" unactive-color="#7d7e80" active-color="#1648d3">
    <nut-tabbar-item v-for="item in List" :key="item.name" :name="item.name" :tab-title="item.title" :icon="item.icon">
    </nut-tabbar-item>
  </nut-tabbar>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { Home, Category, Find, Cart, My } from '@nutui/icons-vue-taro'

const activeName = ref('category')
const List = [
  {
    title: '首页',
    icon: h(Home),
    name: 'home'
  },
  {
    title: '模型库',
    icon: h(Category),
    name: 'category'
  },
  {
    title: '上传报价',
    icon: h(Find),
    name: 'find'
  },
  {
    title: '订单',
    icon: Cart,
    name: 'cart'
  },
  {
    title: '我的',
    icon: h(My),
    name: 'my'
  }
]

const tabSwitch = (item: Record<string, unknown>, index: number) => {
  console.log(item, index)
}
</script>
