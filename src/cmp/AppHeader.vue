<template>
  <h1>
    Mr. Bitcoin
    <!-- <img src="../assets/images/goldBTC.jpg" alt="" /> -->
  </h1>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/contact">Contacts</RouterLink> |
    <RouterLink to="/statistics">Bitcoin stats</RouterLink>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
h1 {
  margin: 0;
  font-weight: 500;
  font-size: 2.3rem;
  color: rgb(224, 165, 54);
}
nav {
  :hover {
    color: orange;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    &.router-link-active {
      color: orange;
    }
  }
}
</style>