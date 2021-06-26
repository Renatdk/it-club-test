<template>
  <AppBar 
    title="Select contact" 
    go-back-link="/"
    create-link="/contacts/create"
  />
  <div class="app-body">
    <ul>
      <li 
        v-for="contact in contacts"
        :key="contact.id"
      >
        <button
          class="my-2 p-2 w-full border border-gray-300 rounded-md shadow"
          @click="setCurrentContact(contact)"
        >
          <span class="block text-xl" > 
            {{ contact.firstName }}
            {{ contact.lastName }}
          </span >
          <span class="block text-sm text-gray-500">
            {{ contact.email}}
          </span >
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import AppBar from "/src/components/AppBar.vue"

export default {
  name: "ContactList",
  components: { AppBar},
  setup () {
    const store = useStore();
    const router = useRouter();
    store.dispatch("getContactItems");

    return {
      contacts: computed(() => store.getters.contactItems),
      setCurrentContact: contact => { 
         store.commit("UPDATE_CURRENT_CONTACT", contact);
         router.push("/"); 
      }
    }
  }
}
</script>
