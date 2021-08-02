<template>
  <div>
    <router-view>
      <Home />
    </router-view>
  </div>
</template>

<script>
import Home from "./components/Home/Home/Home.vue";
export default {
  components: { Home },
  name: "App",
};
</script>

<style  scoped></style>
