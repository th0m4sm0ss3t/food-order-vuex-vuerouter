import { createStore } from "vuex";

import data from "@/data/data";

export default createStore({
  state () {
    return {
      products: data,
      orderItemsNumber: 0,
      orderItems: [],
      orderPrice: 0,
    }
  },
  mutations: {},
  actions: {},
  getters: {
    availableProducts (state) {
      return state.products.filter(product => product.inventory > 0);
    }
  },
  modules: {},
});
