<template>
  <div>
    <div>
      <vue-highcharts :options="options" ref="lineCharts"></vue-highcharts>
      <button @click="load">load</button>
    </div>
  </div>
</template>
<script>
import VueHighcharts from 'vue2-highcharts';
import {BASE_URL} from "../../main";
const asyncData = {
name: 'Tokyo',
// marker: {
// symbol: 'square'
// },
// data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
// y: 26.5,
// marker: {
// symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)'
// }
// }, 23.3, 18.3, 13.9, 9.6]
 };
export default{
components: {
VueHighcharts
},
data(){
return{
  token:'',
response:{},
options: {
chart: {
type: 'spline'
},
title: {
text: 'Monthly Average Temperature'
},
subtitle: {
text: 'Source: WorldClimate.com'
},
xAxis: {
categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
},
yAxis: {
title: {
text: 'Temperature'
},
labels: {
formatter: function () {
return this.value + '°';
}
}
},
plotOptions: {
spline: {
marker: {
radius: 4,
lineColor: '#666666',
lineWidth: 1
}
}
},
series: []
}
}
},
methods: {
  load() {
    let lineCharts = this.$refs.lineCharts;
    lineCharts.delegateMethod('showLoading', 'Loading...');
    setTimeout(() => {
      lineCharts.addSeries(asyncData);
      lineCharts.hideLoading();
    }, 2000)
  },
  getGraph() {
    var payload = {"token": this.$store.state.token,"type":"CHOLESTROL"};
    this.$http.post(BASE_URL + "graphs", payload).then(response => {
      console.log(response.body);
      this.response = response.body.data;
      console.log(this.response);
      this.options.chart = this.response.chart;
      this.options.title = this.response.title;
      this.options.subtitle = this.response.subtitle;
      this.options.xAxis = this.response.xAxis;
      this.options.yAxis = this.response.yAxis;
      this.options.plotOptions = this.response.plotOptions;
      this.options.series = this.response.series;
      console.log(this.options);
    })
  }
},
  created(){
  this.getGraph();
  }
}
</script>


<style scoped>
</style>
