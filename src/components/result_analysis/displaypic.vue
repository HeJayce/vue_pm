<template>
  <div>
    <p style='color: #333;text-align: left;line-height: 80px;font-size: 32px;font-weight: bold;'>数据分析可视化结果图</p>
    <p style='color: #333;text-align: left;line-height: 20px;font-size: 20px;font-weight: bold;'>点击查看大图</p>
    <ul class='card' v-for='(item) in jaycepic' :key='item.src'>
      <li>
        <el-row>
          <div :body-style="{ padding: '0px' }">
            <el-image :src=item.src class='image' alt='pic' :preview-src-list='srcList'
                      style='width: 500px; height: 330px'>
            </el-image>
            <div class='text'>
              <p style='align-content: center'>{{ item.text }}</p>
            </div>
          </div>
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
  name: 'displaylstm',
  data () {
    return {
      jaycepic: [
        {
          src: 'jaycepic/jaycepic1.png',
          text: '北京5年PM2.5多因素曲线'
        },
        {
          src: 'jaycepic/jaycepic8.png',
          text: '北京一周每小时PM2.5热力图'
        },
        {
          src: 'jaycepic/jaycepic9.png',
          text: '北京每日平均值'
        },
        {
          src: 'jaycepic/jaycepic10.png',
          text: '北京每日最高值'
        },
        {
          src: 'jaycepic/jaycepic2.png',
          text: '北京5年PM2.5LSTM训练loss'
        },
        {
          src: 'jaycepic/jaycepic3.png',
          text: 'LSTM预测北京数据与原数据'
        },

        {
          src: 'jaycepic/jaycepic5.png',
          text: '自测数据不同高度下的PM2.5浓度和车流量'
        },
        {
          src: 'jaycepic/jaycepic4.png',
          text: '自测数据集训练loss'
        },
        {
          src: 'jaycepic/jaycepic6.png',
          text: 'LSTM自测数据集预测与原数据'
        },
        {
          src: 'jaycepic/jaycepic7.png',
          text: '不同高度PM2.5分布曲线'
        }

      ],
      srcList: [
        'jaycepic/jaycepic1.png',
        'jaycepic/jaycepic8.png',
        'jaycepic/jaycepic9.png',
        'jaycepic/jaycepic10.png',
        'jaycepic/jaycepic2.png',
        'jaycepic/jaycepic3.png',
        'jaycepic/jaycepic5.png',
        'jaycepic/jaycepic4.png',
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
