<template>
  <div>
    <Nav-bar />
    <Products />
  </div>
</template>

<script>
import NavBar from "../NavBar/NavBar.vue";
import Products from '../Products/Products.vue';
export default {
  components: { NavBar, Products },
  name: "Home",
};
</script>

<style lang="scss" scoped></style>
