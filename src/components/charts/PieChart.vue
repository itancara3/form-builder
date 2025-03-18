<!-- Pie Chart component - Renders a pie chart using Chart.js -->
<script setup>
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
  chartData: {
    type: Object,
    required: true
  },
  options: {
    type: Object,
    default: () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right'
        }
      }
    })
  }
})
</script>

<template>
  <Pie
    :data="chartData"
    :options="options"
    class="h-[300px]" />
</template>