<template>
  <div class="mt-10 px-2">
   <div class="text-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="block mx-auto text-green-600 h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
    </svg>
    <span class="text-2xl">Payment complited successfuly</span>
    </div>
    <div class="mt-56 flex items-center justify-between">
      <button
        class="btn btn-blue" 
        type="button"
        @click="goToHome"
      >
       Make another one 
      </button>
    </div>
 </div>
</template>

<script>
import { useRouter } from "vue-router"

export default {
  name: "SuccessPage",
  setup () {
    const router = useRouter();
    return {
      goToHome: () => router.push("/"),
    }
  }
}
</script>
