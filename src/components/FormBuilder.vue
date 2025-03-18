<script setup>
import { ref, computed } from 'vue'
import draggable from 'vuedraggable'
import { useClipboard } from '@vueuse/core'

// Available form elements that can be dragged into the form
const availableElements = ref([
  { type: 'text', label: 'Text Input', placeholder: 'Enter text...' },
  { type: 'number', label: 'Number Input', placeholder: '0' },
  { type: 'email', label: 'Email Input', placeholder: 'email@example.com' },
  { type: 'textarea', label: 'Text Area', placeholder: 'Enter long text...' },
  { type: 'select', label: 'Select', options: ['Option 1', 'Option 2', 'Option 3'] },
  { type: 'checkbox', label: 'Checkbox', checked: false },
  { type: 'radio', label: 'Radio Group', options: ['Option 1', 'Option 2'] },
])

// Form elements that have been added to the form
const formElements = ref([])

// Clipboard functionality for copying form JSON
const { copy, copied } = useClipboard()

// Computed property to generate form JSON
const formJson = computed(() => {
  return JSON.stringify(formElements.value, null, 2)
})

// Handle copying form JSON
const handleCopyJson = () => {
  copy(formJson.value)
}

// Clone element when dragging from available elements
const cloneElement = (element) => {
  return {
    ...element,
    id: `element-${Date.now()}`, // Add unique ID
    label: `${element.label} ${formElements.value.length + 1}` // Add number to label
  }
}

// Remove element from form
const removeElement = (index) => {
  formElements.value.splice(index, 1)
}

// Edit element label
const editLabel = (element) => {
  const newLabel = prompt('Enter new label:', element.label)
  if (newLabel) {
    element.label = newLabel
  }
}
</script>

<template>
  <div class="p-4">
    <!-- Form Builder Header -->
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Form Builder</h2>
      <p class="text-gray-600">Drag and drop elements to build your form</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Available Elements Panel -->
      <div class="lg:col-span-3 bg-white p-4 rounded-lg shadow">
        <h3 class="font-semibold text-gray-700 mb-4">Available Elements</h3>
        <draggable
          :list="availableElements"
          :group="{ name: 'forms', pull: 'clone', put: false }"
          :clone="cloneElement"
          item-key="type"
          class="space-y-2"
        >
          <template #item="{ element }">
            <div
              class="bg-gray-50 p-3 rounded border border-gray-200 cursor-move hover:bg-gray-100 transition-colors"
            >
              <div class="font-medium text-gray-700">{{ element.label }}</div>
              <div class="text-sm text-gray-500">{{ element.type }}</div>
            </div>
          </template>
        </draggable>
      </div>

      <!-- Form Preview Panel -->
      <div class="lg:col-span-6 bg-white p-4 rounded-lg shadow">
        <h3 class="font-semibold text-gray-700 mb-4">Form Preview</h3>
        <draggable
          v-model="formElements"
          group="forms"
          item-key="id"
          class="min-h-[200px] space-y-4"
        >
          <template #item="{ element, index }">
            <div class="relative bg-white border rounded-lg p-4 shadow-sm">
              <!-- Element Controls -->
              <div class="absolute top-2 right-2 flex space-x-2">
                <button
                  @click="editLabel(element)"
                  class="text-gray-400 hover:text-gray-600"
                  title="Edit label"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
                <button
                  @click="removeElement(index)"
                  class="text-red-400 hover:text-red-600"
                  title="Remove element"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>

              <!-- Element Preview -->
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  {{ element.label }}
                </label>

                <!-- Text Input -->
                <input
                  v-if="['text', 'number', 'email'].includes(element.type)"
                  :type="element.type"
                  :placeholder="element.placeholder"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  disabled
                />

                <!-- Textarea -->
                <textarea
                  v-else-if="element.type === 'textarea'"
                  :placeholder="element.placeholder"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  disabled
                ></textarea>

                <!-- Select -->
                <select
                  v-else-if="element.type === 'select'"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  disabled
                >
                  <option v-for="option in element.options" :key="option">
                    {{ option }}
                  </option>
                </select>

                <!-- Checkbox -->
                <div v-else-if="element.type === 'checkbox'" class="mt-1">
                  <input
                    type="checkbox"
                    class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    disabled
                  />
                </div>

                <!-- Radio Group -->
                <div v-else-if="element.type === 'radio'" class="mt-1 space-y-2">
                  <div v-for="option in element.options" :key="option" class="flex items-center">
                    <input
                      type="radio"
                      :value="option"
                      class="border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      disabled
                    />
                    <label class="ml-2 text-sm text-gray-600">{{ option }}</label>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <template #footer v-if="formElements.length === 0">
            <div class="border-2 border-dashed border-gray-200 rounded-lg p-8">
              <div class="text-center">
                <svg
                  class="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <p class="mt-2 text-sm text-gray-500">
                  Drag elements here to start building your form
                </p>
              </div>
            </div>
          </template>
        </draggable>
      </div>

      <!-- Form JSON Panel -->
      <div class="lg:col-span-3 bg-white p-4 rounded-lg shadow">
        <div class="flex justify-between items-center mb-4">
          <h3 class="font-semibold text-gray-700">Form JSON</h3>
          <button
            @click="handleCopyJson"
            class="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            {{ copied ? 'Copied!' : 'Copy' }}
          </button>
        </div>
        <pre class="bg-gray-50 p-4 rounded text-sm overflow-auto max-h-[500px]">{{ formJson }}</pre>
      </div>
    </div>
  </div>
</template>