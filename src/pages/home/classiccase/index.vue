<template>
    <div class="swiper-demo">
      <nut-swiper ref="swiperRef">
        <nut-swiper-item  style="height: 150px">

            <view class="three_box">
                <!-- <div class="img_box">
              <img src="https://yun3d.com/filestore/assets/app/process1.jpg" alt="" style="height: 100%; width: 100%" draggable="false" />
                    <p>图片</p>
                </div> -->
                
                <div class="img_box" v-for="(item, index) in Current3Items">
              <img :src="item.img" alt="" style="height: 100%; width: 100%" draggable="false" />
                    <p>{{item.title}}</p>
                </div>

            </view>
            <!-- <view v-for="(item, index) in Current3Items" >
                {{ item }}
              <img :src="item" alt="" style="height: 100%; width: 100%" draggable="false" />
          </view> -->
        </nut-swiper-item>

      </nut-swiper>
      <div class="swiper-btns">
        <div class="swiper-btn" @click="handlePrev">
          <Left></Left>
        </div>
        <div class="swiper-btn" @click="handleNext">
          <Right></Right>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { computed, ref } from 'vue'
  import { Left, Right } from '@nutui/icons-vue-taro'

  const caseList = ref([
    {title: '图片1',
    img: 'https://yun3d.com/filestore/assets/app/process1.jpg',
},
    {title: '图片2',
    img: 'https://yun3d.com/filestore/assets/app/process1.jpg',  
},
    {title: '图片3',
    img: 'https://yun3d.com/filestore/assets/app/process1.jpg',  
},
    {title: '图片4',
    img: 'https://yun3d.com/filestore/assets/app/process1.jpg',  
},
    {title: '图片5',
    img: 'https://yun3d.com/filestore/assets/app/process1.jpg',  
},
    {title: '图片6',
    img: 'https://yun3d.com/filestore/assets/app/process1.jpg',  
}
  ])

  const currentIndex = ref(0)
  const Current3Items = computed(() => {
    // const caseSize = caseList.value.length
    return  caseList.value.slice(currentIndex.value, currentIndex.value + 3)
})
//   const changeSelected = (index: number) => {
//     currentIndex.value = index
//   }
  
  const swiperRef = ref()
  const handlePrev = () => {
    if (currentIndex.value <= 0) return currentIndex.value = caseList.value.length - 3
    currentIndex.value --
  }
  const handleNext = () => {
      if (currentIndex.value >= caseList.value.length - 3) return currentIndex.value = 0
      currentIndex.value ++
  }
  </script>
  
  <style lang="scss">
  .swiper-demo {
    position: relative;
    margin: 20px 0;
    .nut-swiper{
        border-radius: 26px;
    }
    .three_box{
        // background-color: aqua;
        background: white;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .img_box{
        overflow: hidden;
        position: relative;
        width: 60px;
        flex: 1;
        background-color:rgb(243, 220, 16);
        margin: 10px;
    height: 90%;
    border-radius: 32px;

        // height: 100%;
        >p{
            position: absolute;
    bottom: 3px;
    text-align: center;
    /* margin: 0 auto; */
    color: white;
    width: 100%;
    font-size: 22rpx;
    background: #141417ab;
    height: 64rpx;
    line-height: 64rpx;
        }
    }
  }
  .swiper-btns {
    width: 96%;
    position: absolute;
    top: 50%;
    // transform: translateY(-50%);
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    display: flex;
    justify-content: space-between;
  }
  .swiper-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 30px;
    color: white;
    // background: #0000003b;
    background-color: rgba(0, 0, 0, 0.2);
  }
  </style>
  