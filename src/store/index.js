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
  mutations: {
    addProductToOrder(state, routerSlug) {
      // for increasing the nb of items of the order
      state.orderItemsNumber = state.orderItemsNumber + 1;

      // Get the added product by its slug
      let product = state.products.filter(product => product.slug === routerSlug)

      // Push it to the orderItems array
      state.orderItems.push(product);

      // Add nb of pieces wanted of the object
      product[0].nbOfPieceOrdered = product[0].nbOfPieceOrdered + 1;

      // Update the price of the order
      state.orderPrice = state.orderPrice + product[0].price;
    },
    removeProductFromOrder(state, routerSlug) {
      // for decreasing the nb of items of the order
      state.orderItemsNumber = state.orderItemsNumber - 1;

      // Get the added product by its slug
      let product = state.products.filter(product => product.slug === routerSlug)

      // Pop it from the orderItems array
      state.orderItems.pop(product);

      // Remove nb of pieces wanted of the object
      product[0].nbOfPieceOrdered = product[0].nbOfPieceOrdered - 1;

      // Update the price of the order
      state.orderPrice = state.orderPrice - product[0].price;

      console.log("je passe par le OrderResume", product[0]);
    }
  },
  actions: {},
  getters: {
    availableProducts (state) {
      return state.products.filter(product => product.inventory > 0);
    },
  },
  modules: {},
});
