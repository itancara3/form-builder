<script setup>
import { useI18n } from 'vue-i18n'
import Calendar from '../components/Calendar.vue'

// Initialize i18n composable
const { t } = useI18n()
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-semibold text-primary-850">{{ t('calendar.title') }}</h1>
    <Calendar />
  </div>
</template>