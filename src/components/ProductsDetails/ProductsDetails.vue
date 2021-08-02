<template>
  <div>
    <Nav-bar />
    <div class="container">
      <h2 class="mt-5 text-secondary">Checkout</h2>
      <div v-for="product in products" :key="product.id"></div>
      <div class="row">
        <div class="col-md-5">
          <img :src="product.image" alt="" />
        </div>

        <div class="col-md-7">
          <h2>{{ product.name }}</h2>
          <h3 class="text-secondary">{{ product.weight }}</h3>
          <h5>Price: ${{product.Price}}</h5>
        </div>
      </div>
      <div class="text-center">
        <button class="btn-primary px-3 py-2 rounded">Checkout</button>
      </div>

      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "../Home/NavBar/NavBar.vue";
export default {
  components: { NavBar },
  name: "ProductDetails",

  data() {
    return {
      productId: this.$route.params._id,
    };
  },

  computed: {
    product() {
      return this.$store.state.products.find(
        (product) => product.id === this.productId
      );
    },
  },
};
</script>
