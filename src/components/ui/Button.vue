<!-- Button component - Provides customizable button styles with variants and sizes -->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'text'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

// Compute classes based on props
const classes = computed(() => {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-all transform hover:scale-105 active:scale-95'
  const disabled = 'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
  
  const variants = {
    primary: 'bg-primary-850 text-white hover:bg-primary-950',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600',
    outline: 'border-2 border-primary-850 text-primary-850 hover:bg-primary-850 hover:text-white',
    text: 'text-primary-850 hover:bg-gray-75'
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  }

  return `${base} ${variants[props.variant]} ${sizes[props.size]} ${disabled}`
})
</script>

<template>
  <button
    :class="classes"
    :disabled="disabled" >
    <slot></slot>
  </button>
</template>