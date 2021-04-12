<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/data_analysis_1' }">数据分析一</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/data_analysis_2' }">数据分析二</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-button type="primary" @click="getHotpic()">热力图</el-button>
    </el-row>
      <div v-if = "isShow" class="demo-image__placeholder">
        <div class="block">
          <span class="demonstration"></span>
          <!-- <el-image :src="'data:imgae/jpeg;base64,'+ 'src'"></el-image> -->
          <el-image :src="src"></el-image>
      </div>
      <div class="block">
        <span class="demonstration"></span>
        <el-image :src="src">
          <template #placeholder>
            <div class="image-slot">
              加载中<span class="dot">...</span>
            </div>
          </template>
        </el-image>
      </div>
</div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'data_analysis_1',
  data () {
    return {
      baseURL: 'http://8.129.117.120:8090/',
      src: this.src,
      isShow: false
    }
  },
  created () {
    this.getHotpic()
  },
  methods: {
    getHotpic: function () {
      var that = this
      axios.get(this.baseURL + 'data/get_data').then(function (result) {
        console.log(result.data.data)
        that.src = result.data.data
      })
      this.isShow = !this.isShow
    }
  }
}
</script>

<style>

</style>
