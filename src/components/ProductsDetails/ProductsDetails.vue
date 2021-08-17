<template>
  <div>
    <Nav-bar />
    <div class="container">
      <h2 class="mt-5 text-secondary">Checkout</h2>
      <!-- <div v-for="product in products" :key="product._id"></div> -->
      <div class="row">
        <div class="col-md-5">
          <img :src="product.img" alt="" />
        </div>

        <div class="col-md-7">
          <h2>{{ product.product }}</h2>
          <h3 class="text-secondary">{{ product.width }}</h3>
          <h5>Price: ${{ product.price * quentity }}</h5>
        </div>
      </div>
      <div class="text-center mb-4">
        <button @click="sub">-</button>
        <input
          v-model="quentity"
          type="text"
          name="quentity"
          id=""
          :style="{ width: '50px' }"
          class="text-center"
        />
        <button @click="add">+</button><br /><br />
        <button @click="handleCheckOut" class="btn-primary px-3 py-2 rounded">
          Checkout
        </button>
      </div>

      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "../Home/NavBar/NavBar.vue";
import {mapActions} from 'vuex';
export default {
  components: { NavBar },
  name: "ProductDetails",

  data() {
    return {
      productId: this.$route.params._id,
      quentity: 1,
      singleProduct: null,
    };
  },

  computed: {
    product() {
      return this.$store.state.products.find(
        (product) => product._id === this.productId
      );
    },
  },

  methods: {
    add() {
      this.quentity += 1;
    },

    sub() {
      this.quentity -= 1;
    },
    ...mapActions(['orderProduct']),

    handleCheckOut() {
      // alert("Product Added Successfully");
      // const OrderInfo = {
      //   email: this.$store.state.user.email,
      //   quentity: this.quentity,
      // };
      // console.log(OrderInfo);

      this.singleProduct = this.$store.state.products.find(
        (product) => product._id === this.productId
      );

      const { product, price } = this.singleProduct;

      const checkoutProductDetails = {
        productName: product,
        amount: price * this.quentity,
        date: new Date().toDateString(),
        email: this.$store.state.user.email,
        quantity: this.quentity,
      };
      this.orderProduct(checkoutProductDetails)
      console.log("singleProduct", checkoutProductDetails);

    },

    mounted() {
      this.handleCheckOut();
    },
  },
};
</script>
