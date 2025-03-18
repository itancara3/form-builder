<!-- Not Found Page - Displays a 404 error message -->
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div
    class="min-h-[400px] flex items-center justify-center" >
    <div
      class="text-center bg-white p-8 rounded-lg shadow-md elevation-1" >
      <h2
        class="text-2xl font-bold text-primary-850 mb-2" >
        {{ t('notFound.title') }}
      </h2>

      <p
        class="text-gray-400 mb-6" >
        {{ t('notFound.message') }}
      </p>

      <router-link
        to="/dashboard"
        class="btn btn-primary" >
        {{ t('notFound.returnToDashboard') }}
      </router-link>
    </div>
  </div>
</template>