<template>
  <section v-if="contact" class="contact-details">
    <h2>Contact Details</h2>
    <p>
      <img src="../assets/person.svg" alt="" />
      <span>{{ contact.name }}</span>
    </p>
    <p>
      <img src="../assets/phone.svg" alt="" />
      {{ phoneSvg }}
      <span>{{ contact.phone }}</span>
    </p>
    <p>
      <img src="../assets/mail.svg" alt="" />
      <span>{{ contact.email }}</span>
    </p>
    <button @click="GoBack">Back</button>
  </section>
  <img v-else src="../assets/puff.svg" alt="" class="loader" />
</template>

<script>
export default {
  data() {
    return {
      contact: null,
    };
  },
  created() {
    const contactId = this.$route.params.contactId;
    this.contact = this.contacts.find((contact) => contact._id === contactId);
  },
  methods: {
    GoBack() {
      this.$router.push("/contact");
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
.contact-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 8px;
  margin: auto;
  margin-block-start: 50px;
  padding: 20px;
  width: 500px;
  height: 350px;
  background-color: rgba(227, 206, 84, 0.122);
  h2 {
    margin-block-start: 20px;
    color: goldenrod;
  }
  p {
    display: flex;
    align-items: center;
    gap: 15px;
    span {
      font-size: 1.3rem;
    }
    img {
      width: 30px;
      height: 30px;
    }
  }

  button {
    position: absolute;
    bottom: 35px;
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
</style>