<!--
 * new page
 * @author: xzz2021
 * @since: 2024-06-13
 * constructorbox.vue
-->
<template>
  <view class="main_container">
    <nut-row :gutter="10">
    <nut-col :span="12">
      <leftItem />
    </nut-col>
    <nut-col  :span="12" class="iiii" >
    <itembox :msg="{title:'3D扫描', description: '逆向抄数 瑕疵检测', url:'https://yun3d.com/filestore/assets/app/process1.jpg'}"/>
    <itembox :msg="{title:'3D建模', description: '虚拟数字 智能化设计', url:'https://yun3d.com/filestore/assets/app/process1.jpg'}"/>
    <itembox :msg="{title:'CNC加工', description: '铣削(3轴/4轴/5轴)/车削', url:'https://yun3d.com/filestore/assets/app/process1.jpg'}"/>

    </nut-col>
  </nut-row>

  </view>
</template>

<script setup>
import itembox from './itembox.vue'
import leftItem from './leftItem.vue'

</script>

<style lang="scss" >

.iii{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
