
<template>
  <header>
    <AppHeader />
  </header>

  <RouterView />
</template>

<script>
import AppHeader from "./cmp/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
};
</script>


<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1); /* Adjust the shadow values as needed */
}
</style>