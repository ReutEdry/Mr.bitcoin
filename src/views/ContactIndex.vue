<template>
  <div class="contacts-container">
    <h2>Contacts</h2>
    <section class="actions-btn">
      <label for="search">
        <input type="text" placeholder="Search contact" v-model="filterBy.txt"
      /></label>
      <RouterLink to="/contact/edit"><button>Add Contact</button></RouterLink>
    </section>
    <ContactList
      v-if="contacts"
      :contacts="filteredContacts"
      @remove="removeContact"
    />
    <img v-else src="../assets/puff.svg" alt="" class="loader" />
  </div>
</template>

<script>
import ContactList from "../cmp/ContactList.vue";
export default {
  data() {
    return {
      filterBy: {
        txt: "",
      },
    };
  },
  methods: {
    async removeContact(contactId) {
      console.log(contactId);
      try {
        await this.$store.dispatch({ type: "removeContact", contactId });
      } catch (err) {
        console.log("Coul not remove contact", err);
      }
    },
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    },
    filteredContacts() {
      const regex = new RegExp(this.filterBy.txt, "i");
      return this.contacts.filter((contact) => regex.test(contact.name));
    },
  },
  async created() {
    try {
      this.$store.dispatch({ type: "loadContacts" });
    } catch (err) {
      console.log(`Couldn't load contacts`, err);
    }
  },
  components: {
    ContactList,
  },
};
</script>

<style lang="scss">
.contacts-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block-start: 50px;
  gap: 10px;

  h2 {
    color: goldenrod;
  }

  .actions-btn {
    input {
      margin-inline-end: 8px;
      height: 40px;
      width: 250px;
      padding-inline-start: 5px;
      font-family: inherit;
      border-radius: 3px;
    }

    button {
      background-color: rgba(240, 218, 164, 0.387);
      border: none;
      border: 1px solid rgb(158, 62, 62);
      margin: 5px;
      padding-inline: 10px;
      text-align: center;
      height: 44.2px;
      &:hover {
        background-color: rgba(238, 206, 123, 0.387);
      }
      &:focus {
        background-color: rgba(240, 196, 87, 0.387);
      }
    }

    input,
    button {
      font-size: 1.2rem;
    }
  }
}
</style>