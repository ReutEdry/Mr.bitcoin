<template>
  <img src="../assets/images/contact.png" alt="" />
  <h3>{{ contact.name }}</h3>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>