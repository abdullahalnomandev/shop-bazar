<template>
  <div>
    <Nav-bar />

    <h2 v-if="allOrders.length===0" class="text-danger mt-5 text-center">You have no order please place a order</h2>
    <h2 v-if="allOrders.length !==0" class="text-success mt-1 text-center">You have {{allOrders.length}} order</h2>

    <div v-for="order in allOrders" :key="order._id">
      <div class="container">

        <ul>
          <li>{{ order.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../Home/NavBar/NavBar.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { NavBar },
  name: "Order",

  methods: {
    ...mapActions(["fetchOrder"]),
  },
  computed: mapGetters(["allOrders"]),
  created() {
    this.fetchOrder(this.$store.state.user.email);
  },
};
</script>

<style scoped></style>
