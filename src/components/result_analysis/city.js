import echarts from 'echarts'

const install2 = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $chart: {
      get () {
        return {
          city1: function (id) {
            this.chart = echarts.init(document.getElementById(id))
            // this.chart.clear()
            const optionData = {
              title: {
                text: 'ECharts 入门示例'
              },
              tooltip: {},
              legend: {
                data: ['销量']
              },
              xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
              },
              yAxis: {},
              series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
              }]
            }
            this.chart.setOption(optionData)
          }
        }
      }
    }
  })
}
export default {
  install2
}
