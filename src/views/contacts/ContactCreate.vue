<template>
  <AppBar 
    title="New contact"
    go-back-link="/contacts"
  />
  <div class="app-body">
    <form class="px-2" >
      <div class="mb-4">
        <label 
          for="firstName"  
          class="input-label"
        >
          First Name
        </label>
        <input 
          class="text-input" 
          id="firstName" 
          v-model.trim="contact.firstName"
          type="text" 
          placeholder="Jhone"
          autofocus
        />
      </div>
      <div class="mb-4">
        <label 
          for="lastName" 
          class="input-label"
        >
          Last Name
        </label>
        <input 
          class="text-input" 
          id="lastName" 
          v-model.trim="contact.lastName"
          type="text" 
          placeholder="Doe"
        />
      </div>
      <div class="mb-4">
        <label 
          for="email" 
          class="input-label"
        >
          Email
        </label>
        <input 
          class="text-input" 
          id="email" 
          v-model.trim="contact.email" type="email" placeholder="name@mail.com"
        />
      </div>
      <div class="mt-10 flex items-center justify-between">
        <button
           class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
           type="button"
           :disabled="isLoading"
           @click.prevent="submitContact"
        >
           <svg 
              v-if="isLoading"
              xmlns="http://www.w3.org/2000/svg" 
              class="inline h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
          >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg> 
          {{ isLoading ? 'Saving in progress...' : 'Save' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { computed, watch } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import AppBar from "/src/components/AppBar.vue"

export default {
  name: "ContactCreate",
  components: { AppBar},
  setup () {
    const store = useStore();
    const router = useRouter();

    const contact = computed(() => store.getters.editableContact);
    const isLoading = computed(() => store.getters.isContactLoading);
    
    console.log("setup", contact);
    //const updateEditedContact = contact => store.commit("UPDATE_EDITED_CONTACT", contact);    
    watch(() => store.getters.isContactLoading, (newValue, oldValue) => { 
      if(!newValue, oldValue) {
        router.push("/contacts");       
      }
      console.log(newValue);
      console.log(oldValue);
    });
    //watch(() => contact.value.lastName, () => updateEditedContact(contact));
    //watch(() => contact.value.email, () => updateEditedContact(contact));
    
    const submitContact = () => {
      store.dispatch("createContact", contact);
      store.commit("UPDATE_CONTACT_LOADING", true);
    }

    return {
      contact,
      isLoading,
      submitContact,
    }
  }
}
</script>
