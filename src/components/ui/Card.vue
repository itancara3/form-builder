<!-- Card component - Container with optional header and footer sections -->
<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div
    class="bg-white rounded-lg shadow-md elevation-1" >
    <div
      v-if="title"
      class="px-6 py-4 border-b border-gray-150" >
      <h3
        class="text-lg font-semibold text-primary-850" >
        {{ title }}
      </h3>
    </div>

    <div
      class="p-6" >
      <slot></slot>
    </div>

    <div
      v-if="$slots.footer"
      class="px-6 py-4 bg-gray-75 rounded-b-lg border-t border-gray-150" >
      <slot name="footer"></slot>
    </div>
  </div>
</template>