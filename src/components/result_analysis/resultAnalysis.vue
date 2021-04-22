<template>
  <div id='father'>
    <div id='chartPie'></div>
    <div id='chartLine'></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

require('echarts/theme/macarons')
require('echarts/theme/shine')

export default {
  name: 'resultAnalysis',
  data () {
    return {
      chartPie: null,
      chartLine: null
    }
  },
  mounted () {
    // this.$chart.city1('chart2')
    // this.$chart.line1('chart1')
    // this.$nextTick(() => {
    this.drawPieChart()
    this.drawLineChart()
    // })
  },
  methods: {
    drawPieChart () {
      const mytextStyle = {
        color: '#333',
        fontSize: 18
      }
      const mylabel = {
        show: true,
        position: 'right',
        offset: [30, 40],
        formatter: '{b} : {c} ({d}%)',
        textStyle: mytextStyle
      }
      this.chartPie = echarts.init(document.getElementById('chartPie'), 'macarons')
      this.chartPie.setOption({
        title: {
          text: 'Pie Chart',
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
          left: 'center',
          top: 'bottom',
          orient: 'horizontal'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '50%'],
            data: [
              {
                value: 335,
                name: '直接访问'
              },
              {
                value: 310,
                name: '邮件营销'
              },
              {
                value: 234,
                name: '联盟广告'
              },
              {
                value: 135,
                name: '视频广告'
              },
              {
                value: 1548,
                name: '搜索引擎'
              }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600,
            label: {
              emphasis: mylabel
            }
          }
        ]
      })
    },
    drawLineChart () {
      this.chartLine = echarts.init(document.getElementById('chartLine'), 'shine')// 基于准备好的dom，初始化echarts实例
      const option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisTick: {
              show: false
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false
            },
            name: '（人）'
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表
      this.chartLine.setOption(option)
    }
  }
}
</script>

<style scoped>
#father{
  width: 1200px;
  height: 1200px;
  display: flex;
  align-content: center;
}
#chartPie {
  width: 500px;
  height: 500px;
  padding: 50px;
}
#chartLine {
  width: 500px;
  height: 500px;
  padding: 50px;
}
</style>
