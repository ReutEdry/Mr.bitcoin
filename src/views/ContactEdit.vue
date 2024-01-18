<template>
  <div class="contact-details edit">
    <h2>{{ contact ? "Edit" : "Save" }} contact</h2>
    <section v-if="contact">
      <button @click="GoBack">Back</button>
      <form @submit.prevent="onSaveContact">
        <p>
          <img src="../assets/person.svg" alt="" />
          <input type="text" v-model="contact.name" />
        </p>
        <p>
          <img src="../assets/phone.svg" alt="" />
          <input type="text" v-model="contact.phone" />
        </p>
        <p>
          <img src="../assets/mail.svg" alt="" />
          <input type="text" v-model="contact.email" />
        </p>
        <button class="save">Save</button>
      </form>
    </section>
  </div>
</template>

<script>
import { contactService } from "@/services/contactService";
export default {
  data() {
    return {
      contact: null,
    };
  },
  created() {
    const contactId = this.$route.params.contactId;
    console.log(contactId);
    if (contactId) {
      const contact = this.contacts.find(
        (contact) => contact._id === contactId
      );
      this.contact = JSON.parse(JSON.stringify(contact));
    } else {
      this.contact = contactService.getEmptyContact();
    }
  },
  methods: {
    GoBack() {
      this.$router.push("/contact");
    },
    async onSaveContact() {
      try {
        await this.$store.dispatch({
          type: "saveContact",
          contact: this.contact,
        });
        this.$router.push("/contact");
      } catch (err) {
        console.log("Could not save contact", err);
      }
    },
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    },
  },
};
</script>

<style lang="scss">
.edit {
  p {
    margin-block-end: 30px;
    input {
      font-family: inherit;
      padding: 5px;
      height: 25px;
      width: 200px;
      font-size: 1.1rem;
    }
  }

  .save {
    right: 140px;
  }
}
</style>