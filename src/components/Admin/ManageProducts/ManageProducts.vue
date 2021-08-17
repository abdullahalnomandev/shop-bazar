<template>
  <div class="container-fluid">
    <div class="row">
      <Sidebar />

      <div class="col-md-10">
        <div class="container">
          <h1>Total Product {{ allProducts.length }}</h1>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Product</th>
                  <th>Wight</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody v-for="product in allProducts" :key="product._id">
                <tr>
                  <td>{{ product.product }}</td>
                  <td>{{ product.price }}</td>
                  <td>{{ product.wight }}</td>
                  <td>
                    <button
                      @click="deleteProduct(product._id)"
                      class="btn-danger px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../Sidebar/Sidebar.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { Sidebar },
  name: "ManageProducts",
  computed: mapGetters(["allProducts"]),

  methods: {
    ...mapActions(["deleteProduct"]),
  },
};
</script>

<style scoped>
td {
  padding: 17px 0px;
  width: 270px;
  border-bottom: 1px solid black;
  margin-right: 10px;
  font-size: 15px;
  font-weight: 600;
  padding-left: 10px;
}
table {
  border-collapse: collapse;
}

table thead tr th {
  background-color: #ddd;
  padding: 20px 0px;
  padding-left: 10px;
}
.deleteIcon {
  cursor: pointer;
  color: red;
}
</style>
