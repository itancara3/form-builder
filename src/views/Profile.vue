<!-- Profile Page - User profile management interface -->
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div>
    <h1
      class="text-2xl font-semibold text-gray-900" >
      {{ t('navigation.profile') }}
    </h1>

    <p
      class="mt-4 text-gray-500" >
      {{ t('profile.description') }}
    </p>
  </div>
</template>