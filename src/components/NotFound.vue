<template>
  <div>
    <Nav-bar />

    <div class="container mt-5 text-center">
      <h1 :style="{color:'red'}">404-- Not Found</h1>
    </div>
  </div>
</template>

<script>
import NavBar from "./Home/NavBar/NavBar.vue";
export default {
  components: { NavBar },
  name: "NotFound",
};
</script>

<style lang="scss" scoped></style>
