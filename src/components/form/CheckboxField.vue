<!-- Checkbox Field component - Custom styled checkbox with label -->
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div
    class="form-field flex items-center space-x-3" >
    <input
      type="checkbox"
      :checked="modelValue"
      class="w-4 h-4 text-primary-850 border-gray-200 rounded focus:ring-primary-850"
      @change="$emit('update:modelValue', $event.target.checked)" />
    
    <label
      class="text-sm text-primary-850" >
      {{ label }}
    </label>
  </div>
</template>