<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const handleLogin = () => {
  // Here would be the login logic
  router.push('/dashboard')
}
</script>

<template>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-8" @submit.prevent="handleLogin">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-primary-850">Email</label>
        <div class="mt-2">
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="block w-full"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium leading-6 text-primary-850">Password</label>
        <div class="mt-2">
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="block w-full"
            placeholder="••••••••"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="btn btn-primary w-full"
        >
          Sign in
        </button>
      </div>
    </form>
  </div>
</template>