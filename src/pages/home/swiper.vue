<template>
    <nut-swiper
     :init-page="0"
     :auto-play="3000"
     pagination-visible
     pagination-color="#426543"
     pagination-unselected-color="#808080"
   >
     <nut-swiper-item v-for="(item, index) in list" :key="index" style="height: 30vh">
       <img :src="item.img" alt="" style="height: 100%; width: 100%" draggable="false" />
     </nut-swiper-item>
   </nut-swiper>

</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperItem } from '@nutui/nutui-taro'
const list = ref([
  {img:'https://yun3d.com/filestore/assets/app/home1.jpg'},
  {img:'https://yun3d.com/filestore/assets/app/home1.jpg'},
  {img:'https://yun3d.com/filestore/assets/app/home1.jpg'},
])

</script>

<style>
.demo {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>