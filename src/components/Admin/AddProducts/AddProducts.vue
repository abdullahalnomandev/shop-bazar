<template >
  <div class="container-fluid">
    <div class="row">
      <Sidebar />

      <div :style="{background:'#f0f2f5'}" class="col-md-10">
        <div class="container py-4">
          
          <form action="" @submit="handleProductSubmit" method="post">
            <div class="row mt-5">
            <div class="col-md-6 ">
              <h5 class="text-secondary">Add product</h5>
              <input class="form-control w-75" type="text" name="product" id="product" placeholder="Product Name*" v-model="product"  required><br>
              <h5 class="text-secondary">Add Pricre</h5>
              <input class="form-control w-75" type="number" name="price" id="price" placeholder="$ Enter Price*" v-model="price" required><br>
            </div>
            <div class="col-md-6">
              <h5 class="text-secondary">wight</h5>
              <input class="form-control w-75" type="text" name="wight" id="Wight" placeholder="Write Wight*" v-model="wight" required><br>
              <h5 class="text-secondary">Add Photo</h5>
              <input class="form-control w-75" type="file" name="file" id="file" @change="onFileSelected" ><br>
            </div>
            </div>
          
              <input type="submit" value="Save" class="btn-success px-4 py-2 rounded">
          </form>

        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import Sidebar from "../Sidebar/Sidebar.vue";
export default {
  components: { Sidebar },
  name: "AddProducts",
  data() {
    return {
      product: null,
      price:null,
      wight:null,
      img:null
    }
  },
  methods: {
    onFileSelected(e){

        console.log(e.target.files[0]);
    },
    handleProductSubmit(e) {

        e.preventDefault()
        const product={
            product : this.product,
            price : this.price,
            wight :this.wight,
            img  :this .image
        }

        console.log("product",product);
    }
  },
};
</script>

<style  scoped>
</style>