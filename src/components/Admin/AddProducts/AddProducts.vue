<template>
  <div class="container-fluid">
    <div class="row">
      <Sidebar />

      <div :style="{ background: '#f0f2f5' }" class="col-md-10">
        <div class="container py-4">
          <form action="" @submit="onSubmit">
            <div class="row mt-5">
              <div class="col-md-6 ">
                <h5 class="text-secondary">Add product</h5>
                <input
                  class="form-control w-75"
                  type="text"
                  name="product"
                  id="product"
                  placeholder="Product Name*"
                  v-model="product"
                  required
                /><br />
                <h5 class="text-secondary">Add Pricre</h5>
                <input
                  class="form-control w-75"
                  type="number"
                  name="price"
                  id="price"
                  placeholder="$ Enter Price*"
                  v-model="price"
                  required
                /><br />
              </div>
              <div class="col-md-6">
                <h5 class="text-secondary">wight</h5>
                <input
                  class="form-control w-75"
                  type="text"
                  name="wight"
                  id="Wight"
                  placeholder="Write Wight*"
                  v-model="wight"
                  required
                /><br />
                <h5 class="text-secondary">Add Photo</h5>
                <input
                  class="form-control w-75"
                  type="file"
                  name="file"
                  id="file"
                  @change="onUpload"
                /><br />
              </div>
            </div>

            <input
              type="submit"
              value="Save"
              class="btn-success px-4 py-2 rounded"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../Sidebar/Sidebar.vue";
import {mapActions} from "vuex";
import axios from "axios";
export default {
  components: { Sidebar },
  name: "AddProducts",
  data() {
    return {
      product: null,
      price: null,
      wight: null,
      // imageUrl: '',
      image2:''
    };
  },
  methods: {
    onUpload(e) {
      let vase = this
      const imageData = new FormData();
      imageData.set("key", "f2ba7412e0a54266270f7441b219296d");
      imageData.append("image", e.target.files[0]);
      axios
        .post("https://api.imgbb.com/1/upload", imageData)
        .then(function(response) {

          if(response.status===200){
            vase.image2 = response.data.data.image.url;
          }
          console.log(vase.image2)

        })
        .catch(function(error) {
          console.log("thisis error",error);
        });
    },
    ...mapActions(["addProduct"]),

    onSubmit(e) {
      e.preventDefault();
      const product = {
        product: this.product,
        price: this.price,
        wight: this.wight,
        img: this.image2,
      };

      console.log("product", product); 

      this.addProduct(product)

      this.product= null,
      this.price = null,
      this.wight = null
    },
    
  },
};
</script>

<style scoped></style>
