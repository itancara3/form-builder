<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from '../components/ui/Button.vue'
import Table from '../components/ui/Table.vue'
import Card from '../components/ui/Card.vue'
import Modal from '../components/ui/Modal.vue'
import SlideOver from '../components/ui/SlideOver.vue'

// Initialize i18n composable
const { t } = useI18n()

// Component state
const showModal = ref(false)
const showSlideOver = ref(false)

// Table configuration
const tableHeaders = [
  { key: 'id', label: t('components.table.id') },
  { key: 'name', label: t('components.table.name') },
  { key: 'email', label: t('components.table.email') },
  { key: 'role', label: t('components.table.role') }
]

// Sample table data
const tableItems = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: t('components.table.roles.admin') },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: t('components.table.roles.user') },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: t('components.table.roles.editor') }
]
</script>

<template>
  <div class="space-y-8">
    <!-- Buttons Section -->
    <Card :title="t('components.sections.buttons')">
      <div class="space-y-4">
        <div class="flex flex-wrap gap-4">
          <Button>{{ t('components.buttons.primary') }}</Button>
          <Button variant="secondary">{{ t('components.buttons.secondary') }}</Button>
          <Button variant="outline">{{ t('components.buttons.outline') }}</Button>
          <Button variant="text">{{ t('components.buttons.text') }}</Button>
        </div>
        <div class="flex flex-wrap gap-4">
          <Button size="sm">{{ t('components.buttons.small') }}</Button>
          <Button>{{ t('components.buttons.medium') }}</Button>
          <Button size="lg">{{ t('components.buttons.large') }}</Button>
        </div>
      </div>
    </Card>

    <!-- Table Section -->
    <Card :title="t('components.sections.table')">
      <Table
        :headers="tableHeaders"
        :items="tableItems"
      />
    </Card>

    <!-- Modal & SlideOver Section -->
    <Card :title="t('components.sections.modalSlideOver')">
      <div class="flex gap-4">
        <Button @click="showModal = true">{{ t('components.buttons.openModal') }}</Button>
        <Button @click="showSlideOver = true">{{ t('components.buttons.openSlideOver') }}</Button>
      </div>
    </Card>

    <!-- Modal Component -->
    <Modal v-model="showModal" :title="t('components.modal.title')">
      <p class="text-primary-850">{{ t('components.modal.content') }}</p>
      <template #footer>
        <div class="flex justify-end gap-4">
          <Button variant="text" @click="showModal = false">{{ t('components.buttons.cancel') }}</Button>
          <Button @click="showModal = false">{{ t('components.buttons.confirm') }}</Button>
        </div>
      </template>
    </Modal>

    <!-- SlideOver Component -->
    <SlideOver v-model="showSlideOver" :title="t('components.slideOver.title')">
      <p class="text-primary-850">{{ t('components.slideOver.content') }}</p>
      <template #footer>
        <div class="flex justify-end gap-4">
          <Button variant="text" @click="showSlideOver = false">{{ t('components.buttons.cancel') }}</Button>
          <Button @click="showSlideOver = false">{{ t('components.buttons.confirm') }}</Button>
        </div>
      </template>
    </SlideOver>
  </div>
</template>