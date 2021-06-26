<template>
  <AppBar title="Make a payment"/>
  
  <div class="app-body">
    <form class="px-2" >
      <router-link to="/contacts">
        <div class="mb-4">
          <label 
            for="contactName"  
            class="input-label"
          >
            Select Contact 
          </label>
          <input 
            class="text-input" 
            id="contactName" 
            type="text"
            :value="contactName" 
            placeholder="Jhone Doe"
            autofocus
          />
        </div>
      </router-link>
      <div class="mb-4">
        <label 
          for="amount"  
          class="input-label"
        >
          Enter amount 
        </label>
        <input 
          class="text-input" 
          id="amount" 
          type="text"
          placeholder="0.00"
          autofocus
        />
      </div>
      <div class="mt-10 flex items-center justify-between">
        <button
          class="btn btn-blue" 
          type="button"
          @click.prevent="submitPayment"
        >
          Pay 
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import AppBar from "/src/components/AppBar.vue";

export default {
    name: "HomePage",
    components: { AppBar },
    setup () {
        const store = useStore();
        const router = useRouter();

        return {
            contactName: computed(() => store.getters.currentContactFullName),
            submitPayment: () => router.push("/success"),
        };
    }
};
</script>
