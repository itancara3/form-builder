<script setup>
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">My Application</h2>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>