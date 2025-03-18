<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
  isSameMonth,
  isToday,
  parseISO
} from 'date-fns'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

// Initialize i18n composable
const { t } = useI18n()

// Calendar state
const currentDate = ref(new Date())
const selectedDate = ref(null)

// Weekday labels with translations
const weekdays = [
  t('calendar.weekdays.mon'),
  t('calendar.weekdays.tue'),
  t('calendar.weekdays.wed'),
  t('calendar.weekdays.thu'),
  t('calendar.weekdays.fri'),
  t('calendar.weekdays.sat'),
  t('calendar.weekdays.sun')
]

// Sample events data
const events = ref([
  {
    id: 1,
    title: 'Team Meeting',
    date: '2024-02-15',
    type: 'work'
  },
  {
    id: 2,
    title: 'Project Deadline',
    date: '2024-02-20',
    type: 'deadline'
  },
  {
    id: 3,
    title: 'Birthday Party',
    date: '2024-02-25',
    type: 'personal'
  }
])

// Compute calendar weeks
const weeks = computed(() => {
  const start = startOfWeek(startOfMonth(currentDate.value), { weekStartsOn: 1 })
  const end = endOfWeek(endOfMonth(currentDate.value), { weekStartsOn: 1 })
  const days = eachDayOfInterval({ start, end })

  const weeks = []
  let currentWeek = []

  days.forEach(day => {
    if (currentWeek.length === 7) {
      weeks.push(currentWeek)
      currentWeek = []
    }
    currentWeek.push(day)
  })

  if (currentWeek.length > 0) {
    weeks.push(currentWeek)
  }

  return weeks
})

// Format current month and year
const monthYear = computed(() => {
  return format(currentDate.value, 'MMMM yyyy')
})

// Navigation methods
const nextMonth = () => {
  currentDate.value = addMonths(currentDate.value, 1)
}

const previousMonth = () => {
  currentDate.value = subMonths(currentDate.value, 1)
}

// Helper methods
const getDayClasses = (day) => {
  return {
    'bg-primary-850 text-white': isToday(day),
    'text-gray-400': !isSameMonth(day, currentDate.value),
    'hover:bg-gray-100': isSameMonth(day, currentDate.value) && !isToday(day),
    'cursor-pointer': isSameMonth(day, currentDate.value)
  }
}

const getEventIndicator = (day) => {
  const dayEvents = events.value.filter(event => 
    format(parseISO(event.date), 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd')
  )
  return dayEvents.length > 0
}

const selectDate = (day) => {
  if (isSameMonth(day, currentDate.value)) {
    selectedDate.value = day
  }
}
</script>

<template>
  <div
    class="bg-white rounded-lg shadow-lg p-6"
  >
    <!-- Calendar Header -->
    <div
      class="flex items-center justify-between mb-6"
    >
      <h2
        class="text-xl font-semibold text-primary-850"
      >
        {{ monthYear }}
      </h2>

      <div
        class="flex space-x-2"
      >
        <button
          class="p-2 hover:bg-gray-100 rounded-full transition-colors"
          @click="previousMonth"
        >
          <ChevronLeftIcon
            class="h-5 w-5 text-primary-850"
          />
        </button>

        <button
          class="p-2 hover:bg-gray-100 rounded-full transition-colors"
          @click="nextMonth"
        >
          <ChevronRightIcon
            class="h-5 w-5 text-primary-850"
          />
        </button>
      </div>
    </div>

    <!-- Calendar Grid -->
    <div
      class="grid grid-cols-7 gap-1"
    >
      <!-- Weekday Headers -->
      <template
        v-for="weekday in weekdays"
      >
        <div
          class="text-center text-sm font-medium text-gray-500 py-2"
        >
          {{ weekday }}
        </div>
      </template>

      <!-- Calendar Days -->
      <template
        v-for="week in weeks"
      >
        <template
          v-for="day in week"
        >
          <div
            class="relative p-2 text-center transition-colors rounded-lg"
            :class="getDayClasses(day)"
            @click="selectDate(day)"
          >
            {{ format(day, 'd') }}

            <!-- Event Indicator -->
            <div
              v-if="getEventIndicator(day)"
              class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-primary-850"
            >
            </div>
          </div>
        </template>
      </template>
    </div>

    <!-- Selected Date Events -->
    <div
      v-if="selectedDate"
      class="mt-6 border-t pt-4"
    >
      <h3
        class="text-lg font-medium text-primary-850 mb-3"
      >
        {{ t('calendar.events.title') }} {{ format(selectedDate, 'MMMM d, yyyy') }}
      </h3>

      <div
        class="space-y-2"
      >
        <div
          v-for="event in events.filter(e => format(parseISO(e.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd'))"
          :key="event.id"
          class="p-2 bg-gray-50 rounded-lg"
        >
          <p
            class="font-medium text-primary-850"
          >
            {{ event.title }}
          </p>

          <p
            class="text-sm text-gray-500 capitalize"
          >
            {{ t(`calendar.events.types.${event.type}`) }}
          </p>
        </div>

        <p
          v-if="!events.some(e => format(parseISO(e.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd'))"
          class="text-gray-500"
        >
          {{ t('calendar.events.noEvents') }}
        </p>
      </div>
    </div>
  </div>
</template>