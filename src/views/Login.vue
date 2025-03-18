<!-- Login Page - User authentication interface -->
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

// Initialize router and i18n
const router = useRouter()
const { t } = useI18n()

// Form state
const email = ref('')
const password = ref('')

// Handle login form submission
const handleLogin = () => {
  // Here would be the login logic
  router.push('/dashboard')
}
</script>

<template>
  <div
    class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" >
    <form
      class="space-y-8"
      @submit.prevent="handleLogin" >
      <!-- Email Field -->
      <div>
        <label
          for="email"
          class="block text-sm font-medium leading-6 text-primary-850" >
          {{ t('auth.email') }}
        </label>

        <div
          class="mt-2" >
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="block w-full"
            :placeholder="t('auth.enterEmail')" />
        </div>
      </div>

      <!-- Password Field -->
      <div>
        <label
          for="password"
          class="block text-sm font-medium leading-6 text-primary-850" >
          {{ t('auth.password') }}
        </label>

        <div
          class="mt-2" >
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="block w-full"
            :placeholder="t('auth.enterPassword')" />
        </div>
      </div>

      <!-- Submit Button -->
      <div>
        <button
          type="submit"
          class="btn btn-primary w-full" >
          {{ t('auth.signIn') }}
        </button>
      </div>
    </form>
  </div>
</template>