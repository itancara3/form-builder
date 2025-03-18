<!-- SlideOver component - Side panel that slides in from left or right -->
<script setup>
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  position: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'right'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <TransitionRoot
    appear
    :show="modelValue"
    as="template" >
    <Dialog
      as="div"
      class="relative z-50"
      @close="$emit('update:modelValue', false)" >
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0" >
        <div
          class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div
        class="fixed inset-0 overflow-hidden" >
        <div
          class="absolute inset-0 overflow-hidden" >
          <div
            :class="[
              'pointer-events-none fixed inset-y-0 flex max-w-full',
              position === 'left' ? 'left-0' : 'right-0'
            ]" >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-300"
              :enter-from="position === 'left' ? '-translate-x-full' : 'translate-x-full'"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leave-from="translate-x-0"
              :leave-to="position === 'left' ? '-translate-x-full' : 'translate-x-full'" >
              <DialogPanel
                class="pointer-events-auto w-screen max-w-md" >
                <div
                  class="flex h-full flex-col bg-white shadow-xl" >
                  <div
                    class="flex items-center justify-between px-6 py-4 border-b border-gray-150" >
                    <Dialog.Title
                      as="h3"
                      class="text-lg font-semibold text-primary-850" >
                      {{ title }}
                    </Dialog.Title>
                    <button
                      class="text-gray-400 hover:text-primary-850 transition-colors"
                      @click="$emit('update:modelValue', false)" >
                      <XMarkIcon
                        class="h-5 w-5" />
                    </button>
                  </div>
                  <div
                    class="flex-1 overflow-y-auto px-6 py-4" >
                    <slot></slot>
                  </div>
                  <div
                    v-if="$slots.footer"
                    class="px-6 py-4 bg-gray-75 border-t border-gray-150" >
                    <slot name="footer"></slot>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>