<template>
  <div>
    <el-row>
    <p style='color: #333;text-align: left;line-height: 80px;font-size: 32px;font-weight: bold;'>PM2.5可视化展示</p>
    </el-row>
    <div id='father'>

      <div id='chartLine'></div>
      <div id='chartLine2'></div>
    </div>
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
      flag: true,
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
    // this.drewQimap()
    // })
  },
  methods: {
    switchchart () {
      this.flag = !this.flag
    },
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
        console.log(result.data)
        that.iddata = result.data.iddata
        that.pmh = result.data.pmhdata
        that.pml = result.data.pmldata
      })
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
          wposition: function (pt) {
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
    // drewQimap () {
    //   var chartDom = document.getElementById('chartMap')
    //   var myChart = echarts.init(chartDom)
    //   var option
    //
    //   var data = [
    //     {
    //       name: 'hai',
    //       value: 9
    //     }
    //   ]
    //   var geoCoordMap = {
    //     'hai': [121.15, 31.89]
    //   }
    //
    //   var convertData = function (data) {
    //     var res = []
    //     for (var i = 0; i < data.length; i++) {
    //       var geoCoord = geoCoordMap[data[i].name]
    //       if (geoCoord) {
    //         res.push({
    //           name: data[i].name,
    //           value: geoCoord.concat(data[i].value)
    //         })
    //       }
    //     }
    //     return res
    //   }
    //
    //   option = {
    //     title: {
    //       text: '全国主要城市空气质量 - 百度地图',
    //       subtext: 'data from PM25.in',
    //       sublink: 'http://www.pm25.in',
    //       left: 'center'
    //     },
    //     tooltip: {
    //       trigger: 'item'
    //     },
    //     bmap: {
    //       center: [104.114129, 37.550339],
    //       zoom: 5,
    //       roam: true,
    //       mapStyle: {
    //         styleJson: [{
    //           'featureType': 'water',
    //           'elementType': 'all',
    //           'stylers': {
    //             'color': '#d1d1d1'
    //           }
    //         }, {
    //           'featureType': 'land',
    //           'elementType': 'all',
    //           'stylers': {
    //             'color': '#f3f3f3'
    //           }
    //         }, {
    //           'featureType': 'railway',
    //           'elementType': 'all',
    //           'stylers': {
    //             'visibility': 'off'
    //           }
    //         }, {
    //           'featureType': 'highway',
    //           'elementType': 'all',
    //           'stylers': {
    //             'color': '#fdfdfd'
    //           }
    //         }, {
    //           'featureType': 'highway',
    //           'elementType': 'labels',
    //           'stylers': {
    //             'visibility': 'off'
    //           }
    //         }, {
    //           'featureType': 'arterial',
    //           'elementType': 'geometry',
    //           'stylers': {
    //             'color': '#fefefe'
    //           }
    //         }, {
    //           'featureType': 'arterial',
    //           'elementType': 'geometry.fill',
    //           'stylers': {
    //             'color': '#fefefe'
    //           }
    //         }, {
    //           'featureType': 'poi',
    //           'elementType': 'all',
    //           'stylers': {
    //             'visibility': 'off'
    //           }
    //         }, {
    //           'featureType': 'green',
    //           'elementType': 'all',
    //           'stylers': {
    //             'visibility': 'off'
    //           }
    //         }, {
    //           'featureType': 'subway',
    //           'elementType': 'all',
    //           'stylers': {
    //             'visibility': 'off'
    //           }
    //         }, {
    //           'featureType': 'manmade',
    //           'elementType': 'all',
    //           'stylers': {
    //             'color': '#d1d1d1'
    //           }
    //         }, {
    //           'featureType': 'local',
    //           'elementType': 'all',
    //           'stylers': {
    //             'color': '#d1d1d1'
    //           }
    //         }, {
    //           'featureType': 'arterial',
    //           'elementType': 'labels',
    //           'stylers': {
    //             'visibility': 'off'
    //           }
    //         }, {
    //           'featureType': 'boundary',
    //           'elementType': 'all',
    //           'stylers': {
    //             'color': '#fefefe'
    //           }
    //         }, {
    //           'featureType': 'building',
    //           'elementType': 'all',
    //           'stylers': {
    //             'color': '#d1d1d1'
    //           }
    //         }, {
    //           'featureType': 'label',
    //           'elementType': 'labels.text.fill',
    //           'stylers': {
    //             'color': '#999999'
    //           }
    //         }]
    //       }
    //     },
    //     series: [
    //       {
    //         name: 'pm2.5',
    //         type: 'scatter',
    //         coordinateSystem: 'bmap',
    //         data: convertData(data),
    //         symbolSize: function (val) {
    //           return val[2] / 10
    //         },
    //         encode: {
    //           value: 2
    //         },
    //         label: {
    //           formatter: '{b}',
    //           position: 'right',
    //           show: false
    //         },
    //         emphasis: {
    //           label: {
    //             show: true
    //           }
    //         }
    //       },
    //       {
    //         name: 'Top 5',
    //         type: 'effectScatter',
    //         coordinateSystem: 'bmap',
    //         data: convertData(data.sort(function (a, b) {
    //           return b.value - a.value
    //         }).slice(0, 6)),
    //         symbolSize: function (val) {
    //           return val[2] / 10
    //         },
    //         encode: {
    //           value: 2
    //         },
    //         showEffectOn: 'render',
    //         rippleEffect: {
    //           brushType: 'stroke'
    //         },
    //         hoverAnimation: true,
    //         label: {
    //           formatter: '{b}',
    //           position: 'right',
    //           show: true
    //         },
    //         itemStyle: {
    //           shadowBlur: 10,
    //           shadowColor: '#333'
    //         },
    //         zlevel: 1
    //       }
    //     ]
    //   }
    //
    //   option && myChart.setOption(option)
    // }
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
  width: 100%;
  height: 500px;
  align-content: center;
  /*flex: auto;*/
  border: #409EFF;
}

#chartLine2 {
  width: 100%;
  height: 500px;
  align-content: center;
  /*flex: auto;*/
  border: #409EFF;
}

#chartMap {
  width: 50%;
  height: 500px;
  align-content: center;
  flex: auto;
  border: #409EFF;
}
</style>
