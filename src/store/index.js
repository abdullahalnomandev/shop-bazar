import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//State
const state = {
  user: { email: null, name: null },
  products: [],
  orders: [],
};

//Getters
const getters = {
  allProducts: (state) => state.products,
  allOrders: (state) => state.orders,
};

//Action
const actions = {

  //GET
  async fetchProducts({ commit }) {
    try {
      const response = await axios.get(
        "https://rocky-reaches-51379.herokuapp.com/products"
      );
      commit("setProducts", response.data);
    } catch (err) {
      console.log(err);
    }
  },

  //GET Order
  async fetchOrder({ commit }, userEmail) {
    try {
      const response = await axios.get(
        `https://rocky-reaches-51379.herokuapp.com/orders?email=${userEmail}`
      );

      commit("Orders", response.data);
      console.log("res", response.data);
    } catch (err) {
      console.log(err);
    }
  },

  //POST
  async addProduct({ commit }, product) {
    try {
      const response = await axios.post(
        "https://rocky-reaches-51379.herokuapp.com/addProducts",
        product
      );
      commit("addProduct", response.data);
      if (response) {
        alert("Product added successful.");
      }
    } catch (error) {
      console.log(error);
    }
  },

  async orderProduct({ commit }, checkoutProductDetails) {
    try {
      const response = await axios.post(
        "https://rocky-reaches-51379.herokuapp.com/orderDetails",
        checkoutProductDetails
      );
      commit("orderProduct", response.data);
      if(response){
        alert("Your Order has been success.")
      }
    }
    catch(error){
      console.log(error);
    }
  },


  //DELETE
  async deleteProduct({ commit }, id) {
    await axios.delete(
      `https://rocky-reaches-51379.herokuapp.com/delete/${id}`
    );
    commit("removeProduct", id);
  },
};

//Mutation
const mutations = {
  setProducts: (state, products) => (state.products = products),
  addProduct: (state, Product) => state.products.shift(Product),
  removeProduct: (state, id) =>
    (state.products = state.products.filter((product) => product._id !== id)),
  Orders: (state, orders) => (state.orders = orders),
  orderProduct:(state,checkoutProductDetails) => (state.orders = checkoutProductDetails)
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
