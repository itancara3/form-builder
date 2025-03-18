import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export function useFormBuilder() {
  const { t, locale } = useI18n()
  
  // Form elements state
  const formElements = ref([])
  
  // Available form elements with translations
  const availableElements = ref([
    { type: 'text', label: t('formBuilder.elements.text'), placeholder: t('formBuilder.placeholders.text') },
    { type: 'number', label: t('formBuilder.elements.number'), placeholder: t('formBuilder.placeholders.number') },
    { type: 'email', label: t('formBuilder.elements.email'), placeholder: t('formBuilder.placeholders.email') },
    { type: 'textarea', label: t('formBuilder.elements.textarea'), placeholder: t('formBuilder.placeholders.textarea') },
    { type: 'select', label: t('formBuilder.elements.select'), options: [t('formBuilder.option1'), t('formBuilder.option2'), t('formBuilder.option3')] },
    { type: 'checkbox', label: t('formBuilder.elements.checkbox'), checked: false },
    { type: 'radio', label: t('formBuilder.elements.radio'), options: [t('formBuilder.option1'), t('formBuilder.option2')] }
  ])

  // Watch for locale changes to update translations
  watch(locale, () => {
    availableElements.value = [
      { type: 'text', label: t('formBuilder.elements.text'), placeholder: t('formBuilder.placeholders.text') },
      { type: 'number', label: t('formBuilder.elements.number'), placeholder: t('formBuilder.placeholders.number') },
      { type: 'email', label: t('formBuilder.elements.email'), placeholder: t('formBuilder.placeholders.email') },
      { type: 'textarea', label: t('formBuilder.elements.textarea'), placeholder: t('formBuilder.placeholders.textarea') },
      { type: 'select', label: t('formBuilder.elements.select'), options: [t('formBuilder.option1'), t('formBuilder.option2'), t('formBuilder.option3')] },
      { type: 'checkbox', label: t('formBuilder.elements.checkbox'), checked: false },
      { type: 'radio', label: t('formBuilder.elements.radio'), options: [t('formBuilder.option1'), t('formBuilder.option2')] }
    ]
  })

  // Computed JSON representation of form elements
  const formJson = computed(() => {
    return JSON.stringify(formElements.value, null, 2)
  })

  // Clone element for drag and drop
  const cloneElement = (element) => {
    return {
      ...element,
      id: `element-${Date.now()}`,
      label: `${element.label} ${formElements.value.length + 1}`
    }
  }

  // Remove element from form
  const removeElement = (index) => {
    formElements.value.splice(index, 1)
  }

  // Edit element label
  const editLabel = (element) => {
    const newLabel = prompt(t('formBuilder.enterNewLabel'), element.label)
    if (newLabel) {
      element.label = newLabel
    }
  }

  return {
    formElements,
    availableElements,
    formJson,
    cloneElement,
    removeElement,
    editLabel
  }
}