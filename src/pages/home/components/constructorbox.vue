<!--
 * new page
 * @author: xzz2021
 * @since: 2024-06-13
 * constructorbox.vue
-->
<template>
  <view class="container">
    <nut-row :gutter="10">
    <nut-col :span="12">
      <div class="content33">span:8</div>
    </nut-col>
    <nut-col  :span="12" class="iiii" >
    <!-- <nut-row :span="24">
        <itembox/>
    </nut-row>
    <nut-row :span="24">
      <div class="content33">span:6</div>
    </nut-row>
    <nut-row :span="24">
      <div class="content33">span:6</div>
    </nut-row> -->
    <itembox/>
    <itembox/>
    <itembox/>

    </nut-col>
  </nut-row>

  </view>
</template>

<script setup>
import itembox from './itembox.vue'
</script>

<style lang="scss" >
.content33 {
  line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background: #ff8881;
  margin-bottom: 10px;
}
.iii{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
