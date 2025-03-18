<!-- Select Field component - Material Design inspired select field with floating label -->
<script setup>
import { useFormField } from '../../composables/useFormField'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true
  },
  required: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])
const { focused, hasContent } = useFormField(props)
</script>

<template>
  <div
    class="form-field" >
    <div
      class="relative" >
      <select
        :value="modelValue"
        :required="required"
        class="block w-full px-0 py-2 text-primary-850 bg-transparent border-0 border-b-2 border-gray-200 appearance-none
               focus:outline-none focus:ring-0 focus:border-primary-850 peer"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="focused = true"
        @blur="focused = !hasContent" >
        <option
          value=""
          disabled
          selected >
        </option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value" >
          {{ option.label }}
        </option>
      </select>

      <label
        class="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
               peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        :class="[focused || hasContent ? 'text-primary-850' : 'text-gray-400']" >
        {{ label }}
      </label>
    </div>
  </div>
</template>