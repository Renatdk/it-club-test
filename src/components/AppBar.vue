<template>
  <div class="h-12 fixed top-0 w-full flex items-center bg-blue-800 text-white text-xl shadow-md">
    <router-link 
      v-if="goBackLink"
      :to="goBackLink"
      class="p-2 active:bg-blue-500"
    > 
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </router-link>
    <div
      v-else 
      class="p-2"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>    
    </div>

    <span class="ml-3">{{ title }}</span>
    <router-link 
      v-if="createLink"
      :to="createLink"
      class="ml-auto p-2 active:bg-blue-500"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg> 
    </router-link>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String,
  goBackLink: String,
  createLink: String,
})

</script>


