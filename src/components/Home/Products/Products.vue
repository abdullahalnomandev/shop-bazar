<template>
  <div class="container">
    <div class="text-center mt-5">
      <h3 v-if="allProducts.length === 0"> <img src="https://thumbs.gfycat.com/UncommonCrazyAfricanaugurbuzzard-max-1mb.gif" alt=""></h3>
    </div>
    <div class="row my-5">
      <div
        v-for="product in allProducts"
        :key="product._id"
        class="col-md-4 col-sm-6 col-sm-auto"
      >
        <div class="card-product">
          <b-card
            :title="product.product + ' - ' + product.wight"
            :img-src="product.img"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              <h5 class="text-secondary">$ {{ product.price }}</h5>
            </b-card-text>
            <div class="text-center">
              <router-link
                :to="{ name: 'ProductsDetails', params: { _id: product._id } }"
              >
                <button class="btn-dark rounded px-3 py-2">Buy Now</button>
              </router-link>
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Products",
  methods: {
    ...mapActions(["fetchProducts"]),
  },
  computed: mapGetters(["allProducts"]),
  created() {
    this.fetchProducts();
  },
};
</script>


<style scoped>
img.card-img-top {
  height: 226px;
}
article.card.mb-2 {
  margin: auto;
}
</style>
