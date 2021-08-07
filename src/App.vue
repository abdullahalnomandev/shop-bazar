<template>
  <div>
    <router-view>
      <h1>I am abdullah AL noman</h1>
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
