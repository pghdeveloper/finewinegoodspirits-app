<script>

import { Line } from "vue-chartjs";
import numeral from "numeral";
  export default {
    extends: Line,
    name: 'LineChart',
    props: ["data"],
    watch: {
      'data': function() {
        this.showChart();
      }
    },
    mounted(){
      this.showChart();
    },
    methods: {
      async showChart()
      {
        let chartData = {
        labels: [],
        datasets: [
          {
            label: "Sales Views",
            backgroundColor: "#f87979",
            data: []
          }
        ]
      };

      for (let i = 0; i < this.data.length; i++) {
        chartData.labels.push(this.data[i].fiscalyear);
        chartData.datasets[0].data.push(this.data[i].sales);
      }

      this.renderChart(chartData, {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false,
              callback: value => numeral(value).format('$0,0')
            }
          }]
        }
      });
      }
    }
  }
</script>