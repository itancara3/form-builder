<script setup>
</script>

<template>
  <div class="min-h-[400px] flex items-center justify-center">
    <div class="text-center bg-white p-8 rounded-lg shadow-md elevation-1">
      <h2 class="text-2xl font-bold text-primary-850 mb-2">404 - Page Not Found</h2>
      <p class="text-gray-400 mb-6">The page you're looking for is under construction or doesn't exist.</p>
      <router-link 
        to="/dashboard" 
        class="btn btn-primary"
      >
        Return to Dashboard
      </router-link>
    </div>
  </div>
</template>