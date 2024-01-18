<template>
  <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

export default {
  name: "LineChart",
  components: { Line },
  props: {
    data: {
      type: Object,
      requires: true,
    },
    labels: {
      type: Object,
      requires: true,
    },
  },
  data() {
    return {
      chartData: {
        labels: this.labels,
        datasets: [
          {
            label: "Data One",
            backgroundColor: "goldenrod",
            data: this.data,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>

<style scoped>
canvas {
  height: 350px;
}
</style>