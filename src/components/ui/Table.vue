<!-- Table component - Responsive table with loading state and customizable headers -->
<script setup>
const props = defineProps({
  headers: {
    type: Array,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div
    class="overflow-x-auto" >
    <table
      class="min-w-full divide-y divide-gray-200" >
      <thead
        class="bg-gray-75" >
        <tr>
          <th
            v-for="header in headers"
            :key="header.key"
            class="px-6 py-3 text-left text-xs font-medium text-primary-850 uppercase tracking-wider" >
            {{ header.label }}
          </th>
        </tr>
      </thead>

      <tbody
        class="bg-white divide-y divide-gray-200" >
        <template v-if="loading">
          <tr>
            <td
              :colspan="headers.length"
              class="px-6 py-4 text-center text-gray-400" >
              Loading...
            </td>
          </tr>
        </template>

        <template v-else>
          <tr
            v-for="(item, index) in items"
            :key="index" >
            <td
              v-for="header in headers"
              :key="header.key"
              class="px-6 py-4 whitespace-nowrap text-sm text-primary-850" >
              {{ item[header.key] }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>