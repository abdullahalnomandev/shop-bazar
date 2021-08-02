import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {

  user: {email:null},
  
  products :[
    {
      id: 1,
      name: "Ligeboy Soap Bar",
      weight: "100 gm",
      Price: 500,
      image: "https://i.ibb.co/4t8g3Gp/liboy.jpg",
    },
    {
      id: 2,
      name: "Rashid Minicate Rice",
      weight: "50kg",
      Price: 234,
      image: "https://i.ibb.co/nLK6bWM/minicate.jpg",
    },
    {
      id: 3,
      name: "Cheps ",
      weight: "59 g",
      Price: 234,
      image: "https://i.ibb.co/1Gyxhp6/cheps.jpg",
    },
    {
      id: 4,
      name: "Tomato ",
      weight: "2 kg",
      Price: 500,
      image: "https://i.ibb.co/MkHV6ZM/tomato.jpg",
    },
    {
      id: 5,
      name: "Coffee ",
      weight: "500 gm",
      Price: 73,
      image: "https://i.ibb.co/LSFdr9P/download-2.jpg",
    },
    {
      id: 6,
      name: "Lax Sope ",
      weight: "600 gm",
      Price: 50,
      image: "https://i.ibb.co/n7nbJb9/download-3.jpg",
    },

  ]
};

const getters = {};

const actions = {};

const mutations = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
