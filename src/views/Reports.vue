<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Card from '../components/ui/Card.vue'
import LineChart from '../components/charts/LineChart.vue'
import PieChart from '../components/charts/PieChart.vue'
import BarChart from '../components/charts/BarChart.vue'
import { salesData } from '../data/reportData'

// Initialize i18n composable
const { t } = useI18n()

// Time period selector state
const selectedPeriod = ref('monthly')

// Define time period options with translations
const periods = [
  { value: 'daily', label: t('reports.periods.daily') },
  { value: 'weekly', label: t('reports.periods.weekly') },
  { value: 'monthly', label: t('reports.periods.monthly') },
  { value: 'yearly', label: t('reports.periods.yearly') }
]
</script>

<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold text-primary-850">{{ t('reports.title') }}</h1>
      <div class="flex items-center space-x-4">
        <label class="text-sm text-gray-500">{{ t('reports.timePeriod') }}:</label>
        <select
          v-model="selectedPeriod"
          class="rounded-md border-gray-300 text-sm focus:border-primary-850 focus:ring-primary-850"
        >
          <option v-for="period in periods" :key="period.value" :value="period.value">
            {{ period.label }}
          </option>
        </select>
      </div>
    </div>

    <!-- Charts Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Sales Trend -->
      <Card :title="t('reports.charts.salesTrend')">
        <LineChart :chartData="salesData.monthly" />
      </Card>

      <!-- Revenue by Category -->
      <Card :title="t('reports.charts.revenueByCategory')">
        <PieChart :chartData="salesData.categories" />
      </Card>

      <!-- Weekly Revenue -->
      <Card :title="t('reports.charts.weeklyRevenue')">
        <BarChart :chartData="salesData.revenue" />
      </Card>

      <!-- Traffic Sources -->
      <Card :title="t('reports.charts.trafficSources')">
        <PieChart :chartData="salesData.traffic" />
      </Card>
    </div>

    <!-- Key Metrics -->
    <Card :title="t('reports.metrics.title')">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="p-4 bg-gray-50 rounded-lg">
          <h3 class="text-sm font-medium text-gray-500">{{ t('reports.metrics.totalSales') }}</h3>
          <p class="text-2xl font-semibold text-primary-850">$124,563</p>
          <p class="text-sm text-success-500">+12.5% {{ t('reports.metrics.vsLastMonth') }}</p>
        </div>
        <div class="p-4 bg-gray-50 rounded-lg">
          <h3 class="text-sm font-medium text-gray-500">{{ t('reports.metrics.averageOrder') }}</h3>
          <p class="text-2xl font-semibold text-primary-850">$85.20</p>
          <p class="text-sm text-success-500">+5.3% {{ t('reports.metrics.vsLastMonth') }}</p>
        </div>
        <div class="p-4 bg-gray-50 rounded-lg">
          <h3 class="text-sm font-medium text-gray-500">{{ t('reports.metrics.conversionRate') }}</h3>
          <p class="text-2xl font-semibold text-primary-850">3.2%</p>
          <p class="text-sm text-error-500">-0.8% {{ t('reports.metrics.vsLastMonth') }}</p>
        </div>
        <div class="p-4 bg-gray-50 rounded-lg">
          <h3 class="text-sm font-medium text-gray-500">{{ t('reports.metrics.satisfaction') }}</h3>
          <p class="text-2xl font-semibold text-primary-850">4.8/5.0</p>
          <p class="text-sm text-success-500">+0.2 {{ t('reports.metrics.vsLastMonth') }}</p>
        </div>
      </div>
    </Card>
  </div>
</template>