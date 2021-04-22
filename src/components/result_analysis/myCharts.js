import echarts from 'echarts'

const randomArray = (length) => {
  let i = 0
  let index = 0
  let temp = null
  const arr = [length]
  length = typeof (length) === 'undefined' ? 9 : length
  for (i = 1; i <= length; i++) {
    arr[i - 1] = i
  }
  for (i = 1; i <= length; i++) {
    index = window.parseInt(Math.random() * (length - i)) + i
    if (index !== i) {
      temp = arr[i - 1]
      arr[i - 1] = arr[index - 1]
      arr[index - 1] = temp
    }
  }
  return arr
}
var arr = randomArray(12)

const install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $chart: {
      get () {
        return {
          line1: function (id) {
            this.chart = echarts.init(document.getElementById(id))
            // this.chart.clear()
            const optionData = {
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                type: 'value'
              },
              series: [{
                data: arr,
                type: 'line',
                smooth: true
              }]
            }
            this.chart.setOption(optionData)
          }
        }
      }
    }
  })
}
// const install2 = function (Vue) {
//   Object.defineProperties(Vue.prototype, {
//     $chart: {
//       get () {
//         return {
//           city1: function (id) {
//             this.chart = echarts.init(document.getElementById(id))
//             // this.chart.clear()
//             const optionData = {
//               title: {
//                 text: 'ECharts 入门示例'
//               },
//               tooltip: {},
//               legend: {
//                 data: ['销量']
//               },
//               xAxis: {
//                 data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
//               },
//               yAxis: {},
//               series: [{
//                 name: '销量',
//                 type: 'bar',
//                 data: [5, 20, 36, 10, 10, 20]
//               }]
//             }
//             this.chart.setOption(optionData)
//           }
//         }
//       }
//     }
//   })
// }
export default {
  // install2,
  install
}
