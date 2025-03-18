<!-- Modal component - Reusable dialog with transitions and backdrop -->
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
        class="fixed inset-0 overflow-y-auto" >
        <div
          class="flex min-h-full items-center justify-center p-4 text-center" >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95" >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all" >
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
                class="px-6 py-4" >
                <slot></slot>
              </div>

              <div
                v-if="$slots.footer"
                class="px-6 py-4 bg-gray-75 border-t border-gray-150" >
                <slot name="footer"></slot>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>