
import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useTabbarStore = defineStore('tabbar', () => {
  // 其他配置...
  const selected = ref(0)
  const changeSelected = (index: number) => {
    selected.value = index
  }
  return { selected, changeSelected }
})