<template>
  <ul>
    <li v-for="contact in contacts" :key="contact._id">
      <ContactPreview :contact="contact" />
      <section class="contact-action-btn">
        <RouterLink :to="`/contact/${contact._id}`"
          ><button>Details</button></RouterLink
        >
        <RouterLink :to="`/contact/edit/${contact._id}`">
          <button>Edit</button>
        </RouterLink>
        <button @click="onRemoveContact(contact._id)">Delete</button>
      </section>
    </li>
  </ul>
</template>

<script>
import ContactPreview from "./ContactPreview.vue";
export default {
  props: {
    contacts: {
      type: Array,
      requires: true,
    },
  },
  methods: {
    onRemoveContact(contactId) {
      this.$emit("remove", contactId);
    },
  },
  components: {
    ContactPreview,
  },
};
</script>

<style lang="scss">
ul {
  list-style-type: none;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 10px;
    margin-block-end: 5px;
    border: 1px solid black;
    border-radius: 8px;

    .contact-action-btn {
      display: flex;
      gap: 3px;
      margin-inline-end: 3px;
      button {
        font-size: 1.1rem;
        background-color: rgba(229, 211, 188, 0.56);
        &:hover {
          background-color: rgba(211, 143, 59, 0.56);
        }
        &:focus {
          background-color: rgba(170, 109, 35, 0.56);
        }
      }
    }

    img {
      width: 50px;
      height: 50px;
    }

    h3 {
      font-size: 1.4rem;
      text-align: center;
      font-weight: 500;
    }
  }
}
</style>