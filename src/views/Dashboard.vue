<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import FormBuilder from '../components/FormBuilder.vue'
import TextField from '../components/form/TextField.vue'
import SelectField from '../components/form/SelectField.vue'
import CheckboxField from '../components/form/CheckboxField.vue'
import { ChartBarIcon, UsersIcon, CurrencyDollarIcon, ShoppingCartIcon } from '@heroicons/vue/24/outline'

// Initialize i18n composable
const { t } = useI18n()

// Statistics data with icons and metrics
const stats = [
  { name: t('stats.totalRevenue'), value: '$45,231', change: '+20.1%', changeType: 'positive', icon: CurrencyDollarIcon },
  { name: t('stats.activeUsers'), value: '2,338', change: '+15.3%', changeType: 'positive', icon: UsersIcon },
  { name: t('stats.sales'), value: '1,274', change: '-3.2%', changeType: 'negative', icon: ShoppingCartIcon },
  { name: t('stats.conversionRate'), value: '24.57%', change: '+4.75%', changeType: 'positive', icon: ChartBarIcon }
]

// Form data state management
const formData = ref({
  name: '',
  email: '',
  type: '',
  notifications: false
})

// User type options for select field
const userTypes = [
  { value: 'admin', label: t('form.userTypes.admin') },
  { value: 'user', label: t('form.userTypes.user') },
  { value: 'guest', label: t('form.userTypes.guest') }
]

// Recent activity data
const recentActivity = [
  { id: 1, user: 'John Doe', action: t('activity.createdPost'), time: t('activity.fiveMinutes') },
  { id: 2, user: 'Jane Smith', action: t('activity.updatedProfile'), time: t('activity.tenMinutes') },
  { id: 3, user: 'Mike Johnson', action: t('activity.completedTask'), time: t('activity.oneHour') },
  { id: 4, user: 'Sarah Wilson', action: t('activity.addedComment'), time: t('activity.twoHours') }
]
</script>

<template>
  <div class="space-y-8">
    <!-- Statistics Grid Section -->
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="stat in stats" :key="stat.name" class="bg-white p-6 rounded-lg shadow-md elevation-1">
        <div class="flex items-center">
          <!-- Stat Icon -->
          <div class="p-2 bg-primary-850 rounded-lg">
            <component :is="stat.icon" class="h-6 w-6 text-white" />
          </div>
          <!-- Stat Information -->
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-400">{{ stat.name }}</p>
            <p class="text-2xl font-semibold text-primary-850">{{ stat.value }}</p>
          </div>
        </div>
        <!-- Change Indicator -->
        <div class="mt-4">
          <span
            :class="[
              stat.changeType === 'positive' ? 'text-success-500' : 'text-error-500',
              'text-sm font-medium'
            ]"
          >
            {{ stat.change }}
          </span>
          <span class="text-sm text-gray-400 ml-2">{{ t('stats.vsLastMonth') }}</span>
        </div>
      </div>
    </div>

    <!-- Form and Activity Grid Section -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Sample Form Section -->
      <div class="lg:col-span-2 bg-white p-6 rounded-lg shadow-md elevation-1">
        <h2 class="text-xl font-semibold text-primary-850 mb-6">{{ t('form.sampleForm') }}</h2>
        <form class="space-y-6">
          <TextField
            v-model="formData.name"
            :label="t('form.fullName')"
            required
          />
          <TextField
            v-model="formData.email"
            :label="t('form.emailAddress')"
            type="email"
            required
          />
          <SelectField
            v-model="formData.type"
            :label="t('form.userType')"
            :options="userTypes"
            required
          />
          <CheckboxField
            v-model="formData.notifications"
            :label="t('form.notifications')"
          />
          <button type="submit" class="btn btn-primary">
            {{ t('form.saveChanges') }}
          </button>
        </form>
      </div>

      <!-- Recent Activity Section -->
      <div class="bg-white p-6 rounded-lg shadow-md elevation-1">
        <h2 class="text-xl font-semibold text-primary-850 mb-6">{{ t('activity.recentActivity') }}</h2>
        <div class="space-y-4">
          <div v-for="activity in recentActivity" :key="activity.id" class="border-b border-gray-150 last:border-0 pb-4 last:pb-0">
            <p class="font-medium text-primary-850">{{ activity.user }}</p>
            <p class="text-sm text-gray-400">{{ activity.action }}</p>
            <p class="text-xs text-gray-400 mt-1">{{ activity.time }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Form Builder Section -->
    <div class="bg-white rounded-lg shadow-md elevation-1 p-8">
      <h2 class="text-xl font-semibold text-primary-850 mb-6">{{ t('formBuilder.title') }}</h2>
      <FormBuilder />
    </div>
  </div>
</template>