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
const arr = randomArray(12)

const install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $chart: {
      get () {
        return {
          line1: function (id) {
            this.chart = echarts.init(document.getElementById(id))
            this.chart.clear()
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
export default {
  install
}
