<template>
  <div class="container">
    <div class="row my-5">
      <div
        v-for="product in products"
        :key="product.id"
        class="col-md-4 col-sm-6 col-sm-auto"
      >
        <div class="card-product ">
          <b-card
            :title="product.name + ' - ' + product.weight"
            :img-src="product.image"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2  "
          >
            <b-card-text>
              <h5 class="text-secondary">$ {{ product.Price }}</h5>
            </b-card-text>
            <div class="text-center">
              <router-link
                :to="{ name: 'ProductsDetails', params: { _id: product.id } }"
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
export default {
  name: "Products",
  data() {
    return {
      products: this.$store.state.products,
    };
    
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
