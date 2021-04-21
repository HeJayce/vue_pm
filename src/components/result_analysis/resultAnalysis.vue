<template>
  <div class="hello">
    <div id="chart1"></div>
    <div id="chart2"></div>
  </div>
</template>

<script>
export default {
  name: 'resultAnalysis',
  data () {
    return {}
  },
  mounted () {
    this.$chart.line1('chart1')
    this.$chart.line1('chart2')
  }
}
</script>

<style scoped>
.hello{
  height: 100%;
  width: 100%;
  display: flex;
}
#chart1,#chart2{
  width: 50%;
  height: 50%;
  flex: 1;
}

</style>
