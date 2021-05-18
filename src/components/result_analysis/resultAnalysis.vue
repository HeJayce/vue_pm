<template>
    <div id='father'>
      <div id='chartLine'></div>
      <div id='chartLine2'></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
import axios from 'axios'

require('echarts/theme/macarons')
require('echarts/theme/shine')

export default {
  name: 'resultAnalysis',
  data () {
    return {
      // eslint-disable-next-line no-undef
      baseURL: 'http://127.0.0.1:8000/',
      chartLine: null,
      chartLine2: null,
      iddata: [],
      pmh: [],
      pml: [],
      jaycepic: [
        {
          src: 'jaycepic/jaycepic1.png',
          text: 's'
        },
        {
          src: 'jaycepic/jaycepic2.png',
          text: 's'
        },
        {
          src: 'jaycepic/jaycepic3.png',
          text: 's'
        }
      ],
      bjdata: [],
      date: []
      // src: '@/assets/jaycepic/jaycepic1.png'
    }
  },
  // beforeMount () {
  //
  // },
  mounted () {
    // this.$chart.city1('chart2')
    // this.$chart.line1('chart1')
    // this.getpic()
    this.draw()
    // this.drewBjLine()
    // })
  },
  methods: {
    getbjdata () {
      const that = this
      return axios.get(this.baseURL + 'data/get_bjdata').then(function (result) {
        that.bjdata = result.data.bjdata
        that.date = result.data.datedata
      })
    },
    getData () {
      const that = this
      this.isShow = !this.isShow
      return axios.get(this.baseURL + 'data/get_qidata').then(function (result) {
        that.iddata = result.data.iddata
        that.pmh = result.data.pmhdata
        that.pml = result.data.pmldata
        // console.log(that.pmh)
      })
      // this.dataBJ = tha
    },
    async draw () {
      await this.getData()
      await this.getbjdata()
      this.drewBjLine()
      // this.drawPieChart()
      this.drawLineChart()
    },
    drawLineChart () {
      console.log(this.iddata)
      this.chartLine = echarts.init(document.getElementById('chartLine'), 'shine')// 基于准备好的dom，初始化echarts实例
      const option = {
        title: {
          text: 'PM2.5变化折线图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['高处PM2.5', '低处PM2.5']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.iddata
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '高处PM2.5',
            type: 'line',
            // stack: '总量',
            data: this.pmh
          },
          {
            name: '低处PM2.5',
            type: 'line',
            // stack: '总量',
            data: this.pml
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表
      this.chartLine.setOption(option)
    },
    drewBjLine () {
      this.chartLine2 = echarts.init(document.getElementById('chartLine2'))
      const data = this.bjdata
      const date = this.date
      // const upColor = '#ec0000'
      // const upBorderColor = '#8A0000'
      // const downColor = '#00da3c'
      // const downBorderColor = '#008F28'
      const option = {
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%']
          }
        },
        title: {
          left: 'center',
          text: '北京PM2.5大数据量面积图'
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: date
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, 0.5]
        },
        dataZoom: [{
          type: 'inside',
          start: 0,
          end: 10
        }, {
          start: 0,
          end: 10
        }],
        series: [
          {
            name: 'PM2.5',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
              color: 'rgb(155, 158, 68)'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(155, 158, 68)'
              }, {
                offset: 1,
                color: 'rgb(163, 155, 131)'
              }])
            },
            data: data
          }
        ]
      }
      option && this.chartLine2.setOption(option)
    }
  }

}
</script>

<style scoped>
#father {
  width: 100%;
  /*height: 500px;*/
  display: flex;
  align-content: center;
}
#chartLine {
  width: 50%;
  height: 500px;
  align-content: center;
  flex: auto;
  border: #409EFF;
}
#chartLine2 {
  width: 50%;
  height: 500px;
  align-content: center;
  flex: auto;
  border: #409EFF;
}
</style>
