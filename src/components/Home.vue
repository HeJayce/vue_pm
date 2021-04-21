<template>
  <el-container>
    <!-- 头部区 -->
    <el-header>
      <img src='' alt=''>
      <span>PM2.5检测系统</span>
    </el-header>
    <!-- 页面主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width='200px'>
        <el-menu active-text-color='#ffd04b' router>
          <!-- 一级菜单 模块一 -->
          <el-submenu index='1'>
            <!-- 一级菜单模板区域 -->
            <template slot='title'>
              <!-- 图标 -->
              <i class='el-icon-location'></i>
              <!-- 文本 -->
              <span>模块一</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index='1-1'>
              <!-- 图标 -->
              <i class='el-icon-location'></i>
              <!-- 文本 -->
              <span>这是内容一</span>
            </el-menu-item>
            <el-menu-item index='1-2'>
              <i class='el-icon-document'></i>
              <span slot='title'>这是内容二</span>
            </el-menu-item>
          </el-submenu>

          <!-- 一级菜单 模块二 -->
          <el-submenu index='2'>
            <!-- 一级菜单模板区域 -->
            <template slot='title'>
              <!-- 图标 -->
              <i class='el-icon-location'></i>
              <!-- 文本 -->
              <span>模块二</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index='2-1'>
              <!-- 图标 -->
              <i class='el-icon-location'></i>
              <!-- 文本 -->
              <span>这是内容一</span>
            </el-menu-item>
            <el-menu-item index='2-2'>
              <i class='el-icon-document'></i>
              <span slot='title'>这是内容二</span>
            </el-menu-item>
          </el-submenu>

          <!-- 一级菜单 模块三 -->
          <el-submenu index='3'>
            <!-- 一级菜单模板区域 -->
            <template slot='title'>
              <!-- 图标 -->
              <i class='el-icon-location'></i>
              <!-- 文本 -->
              <span>模块三</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index='3-1'>
              <!-- 图标 -->
              <i class='el-icon-location'></i>
              <!-- 文本 -->
              <span>这是内容一</span>
            </el-menu-item>
            <el-menu-item index='3-2'>
              <i class='el-icon-document'></i>
              <span slot='title'>这是内容二</span>
            </el-menu-item>
          </el-submenu>

          <!-- 一级菜单 模块四 -->
          <el-submenu index='4'>
            <!-- 一级菜单模板区域 -->
            <template slot='title'>
              <!-- 图标 -->
              <i class='el-icon-location'></i>
              <!-- 文本 -->
              <span>模块四</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index='4-1'>
              <!-- 图标 -->
              <i class='el-icon-location'></i>
              <!-- 文本 -->
              <span>这是内容一</span>
            </el-menu-item>
            <el-menu-item index='4-2'>
              <i class='el-icon-document'></i>
              <span slot='title'>这是内容二</span>
            </el-menu-item>
          </el-submenu>

          <!-- 一级菜单 数据分析 -->
          <el-submenu index='data_analysis'>
            <!-- 一级菜单模板区域 -->
            <template slot='title'>
              <!-- 图标 -->
              <i class='el-icon-location'></i>
              <!-- 文本 -->
              <span>数据分析_张卿</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index='data_analysis_1'>
              <!-- 图标 -->
              <i class='el-icon-location'></i>
              <!-- 文本 -->
              <span>数据分析一</span>
            </el-menu-item>
            <el-menu-item index='data_analysis_2'>
              <i class='el-icon-document'></i>
              <span slot='title'>数据分析二</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index='result_analysis'>
            <!-- 一级菜单模板区域 -->
            <template slot='title'>
              <!-- 图标 -->
              <i class='el-icon-location'></i>
              <!-- 文本 -->
              <span>结果分析_何英杰</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index='resultAnalysis'>
              <!-- 图标 -->
              <i class='el-icon-location'></i>
              <!-- 文本 -->
              <span>这是内容一</span>
            </el-menu-item>
            <el-menu-item index='test'>
              <i class='el-icon-document'></i>
              <span slot='title'>数据分析二</span>
            </el-menu-item>
          </el-submenu>

        </el-menu>
      </el-aside>

      <!-- 右侧内容 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'home'
}
</script>
<style lang='css' scoped>
@import "../assets/styles/global.css";
</style>
