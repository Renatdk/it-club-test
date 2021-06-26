import { createRouter, createWebHistory } from "vue-router";

import HomePage from "/src/views/HomePage.vue";
import ContactList from "/src/views/contacts/ContactList.vue";
import ContactCreate from "/src/views/contacts/ContactCreate.vue";
import SuccessPage from "/src/views/SuccessPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/contacts",
    name: "ContactList",
    component: ContactList,
  },
  {
    path: "/contacts/create",
    name: "ContactCreate",
    component: ContactCreate,
  },
  {
    path: "/success",
    name: "SuccessPage",
    component: SuccessPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;

