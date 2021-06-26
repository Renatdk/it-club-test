const state = {
    contactItems: [],
    currentContact: null, 
    editableContact: {
        firstName: "",
        lastName: "",
        email: "",
    },
    isContactLoading: false,
    contactError: null,
};

const mutations = {
    UPDATE_CONTACT_ITEMS (state, payload) {
        state.contactItems = payload.contacts;
    },
    UPDATE_CURRENT_CONTACT (state, contact) {
        state.currentContact = contact;
    },
    UPDATE_EDITABLE_CONTACT (state, contact) {
        if (contact) {
            state.editableContact = contact;
        } 
        else {
            state.editableContact = {
                firstName: "",
                lastName: "",
                email: "",
            };
        }
    },
    UPDATE_CONTACT_LOADING (state, data) {
        console.log("UPCONLO", data);
        state.isContactLoading = data;
    },
    UPDATE_CONTACT_ERROR (state, data) {
        state.contactError= data;
    }

};

const actions = {
    async getContactItems ({ commit }) {
        const response = await fetch("/api/contacts");
        commit("UPDATE_CONTACT_ITEMS", await response.json());
    },
    async createContact({ commit }, contact) {
        try {
            const response = await fetch("/api/contacts", {
                method: 'POST',
                body: JSON.stringify(contact.value),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                commit("UPDATE_EDITABLE_CONTACT", null);
                commit("UPDATE_CONTACT_LOADING", false);
            } else {
                commit("UPDATE_CONTACT_ERROR", "Connection to server error!");
                commit("UPDATE_LOADING_CONTACT", false);
            }
        } catch (error) {
            commit("UPDATE_CONTACT_EDITABLE", error.message);
            commit("UPDATE_LOADING_CONTACT", false);
        }
    }
};

const getters = {
    contactItems: state => state.contactItems.sort((a, b)=> b.id - a.id),
    currentContact: state => state.currentContact,
    currentContactFullName: state => {
        if (state.currentContact) {
            return `${state.currentContact.firstName} ${state.currentContact.lastName}`; 
        } else {
            return ""; 
        } 
    },
    editableContact: state => state.editableContact,
    contactItemsById: (state) => (id) => {
        return state.contactItems.find(contactItem => contactItem.id === id);
    },
    isContactLoading: state => state.isContactLoading,
};

export default {
    state,
    mutations,
    actions,
    getters
};
