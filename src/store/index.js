import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//State
const state = {

  user: { email: null, name: null },

  products: []
};
//Getters
const getters = {
  allProducts: (state) => state.products
};

//Action
const actions = {
  async fetchProducts({commit}) {
    try {
      const response = await axios.get("https://rocky-reaches-51379.herokuapp.com/products");
      commit("setProducts",response.data);
    }
    catch (err) {
      console.log(err);
    }
  }
  
};
//Mutation
const mutations = {
  setProducts: (state,products) => state.products = products
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
