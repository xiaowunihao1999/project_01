<template>
    <div>
      <el-button></el-button>
    </div>
</template>

<script>
import {getListAPI} from '@/api'
export default {
  created() {
    this.getlistFn()
  },
  methods: {
    async  getlistFn() {
      const res = await getListAPI()
      console.log(res);
    }
  }
}
</script>

<style lang="less" scoped>

</style>