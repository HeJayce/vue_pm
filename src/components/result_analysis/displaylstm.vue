<template>
  <div>
    <ul class='card' v-for='(item) in jaycepic' :key='item.src'>
      <li>
        <el-row>
          <el-card :body-style="{ padding: '0px' }">
            <el-image :src=item.src class='image' alt='pic' :preview-src-list='srcList' style='width: 500px; height: 330px'>
            </el-image>
            <div class='text'>
              <p style='align-content: center' >{{ item.text }}</p>
              <!--              <div class='bottom clearfix'>-->
              <!--                <el-button type='text' class='button'>点击下载图片</el-button>el-button-->
              <!--              </div>-->
            </div>
          </el-card>
        </el-row>
      </li>
    </ul>
  </div>
  <!--  <div class='demo-image__preview'>-->
  <!--    <ul v-for='(item) in jaycepic' :key='item.src'>-->
  <!--      <li>-->
  <!--        <el-image-->
  <!--          style='width: 100px; height: 100px'-->
  <!--          :src=item.src class='image' alt='pic' :preview-src-list='srcList'>-->
  <!--        </el-image>-->
  <!--      </li>-->
  <!--    </ul>-->
  <!--  </div>-->
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      jaycepic: [
        {
          src: 'jaycepic/jaycepic1.png',
          text: '北京5年PM2.5因素曲线'
        },
        {
          src: 'jaycepic/jaycepic2.png',
          text: '北京5年PM2.5训练loss'
        },
        {
          src: 'jaycepic/jaycepic3.png',
          text: '预测数据与原数据'
        },
        {
          src: 'jaycepic/jaycepic4.png',
          text: '带入检测数据集训练loss'
        },
        {
          src: 'jaycepic/jaycepic5.png',
          text: '不同高度PM2.5浓度和车流量'
        },
        {
          src: 'jaycepic/jaycepic6.png',
          text: '检测数据集预测与原数据'
        },
        {
          src: 'jaycepic/jaycepic7.png',
          text: '不同高度PM2.5分布曲线'
        }
      ],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'jaycepic/jaycepic1.png',
        'jaycepic/jaycepic2.png',
        'jaycepic/jaycepic3.png',
        'jaycepic/jaycepic4.png',
        'jaycepic/jaycepic5.png',
        'jaycepic/jaycepic6.png',
        'jaycepic/jaycepic7.png'

      ]
    }
  }
}
</script>
<style scoped>
@import "../../assets/styles/global.css";

.card {
  float: left;
}

.card img {
  width: 500px;
  height: 330px;
}

li {
  list-style-type: none;
  width: 500px;
  height: 400px;
}

.text {
  margin: 0 auto;
  padding: 14px;
  font-size: 20px;
}
</style>
