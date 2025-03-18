import { ref, watch } from 'vue'

export function useFormField(props) {
  const focused = ref(false)
  const hasContent = ref(!!props.modelValue)

  watch(() => props.modelValue, (newVal) => {
    hasContent.value = !!newVal
  })

  return {
    focused,
    hasContent
  }
}